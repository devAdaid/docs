# 상태 관리

Naninovel이 런타임에 생성하고 사용하는, 모든 지속되는(persistent) 데이터는 다음과 같은 세 가지로 나뉩니다.

- 게임 상태 (Game state)
- 전역 상태 (Global state)
- 사용자 설정 (User settings)

데이터는 JSON 형식으로 직렬화되며, 바이너리 `.nson` (기본값) 또는 텍스트 `.json` 저장 슬롯 파일로 플랫폼별 [persistent 데이터 디렉토리](https://docs.unity3d.com/ScriptReference/Application-persistentDataPath.html)에 저장횝니다. WebGL 플랫폼에서는 현대 웹 브라우저의 LFS 보안 정책으로 인해, 직렬화된 데이터는 이 대신 [Indexed DB](https://en.wikipedia.org/wiki/Indexed_Database_API)를 통해 저장됩니다.

직렬화 동작은 게임 저장, 전역 상태 및 사용자 설정을 위해 직렬화 핸들러에 의해 제어됩니다. 기본적으로, 범용 직렬화 핸들러가 사용됩니다. 대부분의 경우 핸들러는 비동기식 [System.IO](https://docs.microsoft.com/en-us/dotnet/api/system.io)를 사용하여 슬롯 파일을 로컬 파일 시스템에 읽고 씁니다. 그러나 일부 플랫폼(예시: 콘솔)에서는 .NET IO API를 사용할 수 없으며, 이 경우 범용 핸들러는 Unity의 크로스 플랫폼 [PlayerPrefs](https://docs.unity3d.com/ScriptReference/PlayerPrefs.html)으로 대체됩니다.

상태 구성 메뉴를 통해 직렬화 핸들러, 저장 파일 경로, 저장 슬롯 최대 개수, 다른 관련 매개변수들을 수정할 수 있습니다.

![](https://i.gyazo.com/d1e5cfd136544f2c1b74966e3fd1bb45.png)

## 게임 상태

게임 상태는 게임 저장 슬롯마다 달라지는 데이터로, 플레이어의 게임 진행과 관련된 엔진 서비스 및 기타 오브젝트의 상태를 나타냅니다. 게임 상태 데이터 예시: 현재 재생된 Naninovel 스크립트, 재생된 스크립트 커맨드의 인덱스, 현재 표시되고 있는 캐릭터 및 씬에서의 위치, 현재 재생된 배경음 트랙 이름 및 볼륨 등.

현재 게임 상태를 저장하거나 특정 저장 슬롯에 로드하려면 `IStateManager` 엔진 서비스를 다음과 같이 사용합니다.

```csharp
// Get instance of a state manager.
var stateManager = Engine.GetService<IStateManager>();

// Save current game session to `mySaveSlot` slot.
await stateManager.SaveGameAsync("mySaveSlot");
// Load game session from `mySaveSlot` slot.
await stateManager.LoadGameAsync("mySaveSlot");

// You can also use quick save-load methods without specifying the slot names.
await stateManager.QuickSaveAsync();
await stateManager.QuickLoadAsync();
```
저장-불러오기 API는 [비동기식](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/)입니다. 동기 메소드에서 API를 호출하는 경우, 완료 이벤트를 구독하기 위해 `IStateManager.OnGameSaveFinished`와 `IStateManager.OnGameLoadFinished`를 사용하세요.

## 전역 상태

반면에, 어떤 데이터는 게임 세션 동안 유지되어야 합니다. 예를 들어, "읽은 텍스트 스킵" 기능을 위해서는 엔진이 어떤 Naninovel 스크립트 커멘드가 적어도 한 번 실행되었는지에 관한 데이터를 저장해야 합니다 (플레이어가 이미 이미 그것들을 "보았다"는 것을 의미). 이와 같은 데이터는 하나의 "전역" 세이브 슬롯에 저장되며 게임 저장-불러오기 작업에 의존하지 않습니다.

전역 상태는 엔진 초기화 시 자동으로 로드됩니다. 다음과 같이 `IStateManager`를 사용하여 언제든지 전역 상태를 저장할 수 있습니다.

```csharp
await stateManager.SaveGlobalStateAsync();
```

## 사용자 설정

사용자 설정 데이터(화면 해상도, 언어, 사운드 볼륨 등)는 단일 저장 슬롯에 저장되는 점은 전역 상태와 비슷하지만, 기본적으로 약간 다르게 처리됩니다. 생성된 저장 파일은 "Saves" 폴더 외부에 읽을 수 있는 형식으로 파일이 생성되어, 사용자가 원할 경우 값을 수정할 수 있습니다.

사용자 설정은 엔진 초기화 시 자동으로 로드됩니다. 다음과 같이 `IStateManager`를 사용하여 언제든지 사용자 설정을 저장할 수 있습니다.

```csharp
await stateManager.SaveSettingsAsync();
```

## 사용자 정의 상태

사용자 정의 오브젝트의 상태 처리를 `IStateManager`에게 맡길 수 있습니다. 이를 통해 플레이어가 게임을 저장할 때 모든 엔진 데이터를 저장 슬롯에 직렬화하고, 게임을 불러올 때 역직렬화할 수 있습니다. 모든 상태 관련 내장 기능(예시: 롤백)은 기본적으로 사용자 정의 상태와 사용해도 잘 동작할 것입니다.

다음은 "MyCustomBehaviour" 컴포넌트의 상태 처리를 위임하는 예제입니다.

```csharp
using UnityEngine;
using Naninovel;

public class MyCustomBehaviour : MonoBehaviour
{
    [System.Serializable]
    private class GameState
    {
    	public bool MyCustomBool;
    	public string MyCustomString;
    }

    private bool myCustomBool;
    private string myCustomString;
    private IStateManager stateManager;

    private void Awake ()
    {
        stateManager = Engine.GetService<IStateManager>();
    }

    private void OnEnable ()
    {
        stateManager.AddOnGameSerializeTask(SerializeState);
        stateManager.AddOnGameDeserializeTask(DeserializeState);
    }

    private void OnDisable ()
    {
        stateManager.RemoveOnGameSerializeTask(SerializeState);
        stateManager.RemoveOnGameDeserializeTask(DeserializeState);
    }

    private void SerializeState (GameStateMap stateMap)
    {
        var state = new GameState() {
            MyCustomBool = myCustomBool,
            MyCustomString = myCustomString
        };
        stateMap.SetState(state);
    }

    private UniTask DeserializeState (GameStateMap stateMap)
    {
        var state = stateMap.GetState<GameState>();
        if (state is null) return UniTask.CompletedTask;

        myCustomBool = state.MyCustomBool;
        myCustomString = state.MyCustomString;
        return UniTask.CompletedTask;
    }
}
```

::: tip 예제
사용자 정의 구조체의 리스트를 포함하는 사용자 정의 상태를 사용하여 인벤토리 UI의 게임 상태를 저장 및 불러오기를 하는 심화 예제는 [GitHub의 인벤토리 예제 프로젝트](https://github.com/naninovel/samples/tree/main/unity/inventory)에서 확인할 수 있습니다. 이 중, 사용자 정의 UI인 [InventoryUI.cs](https://github.com/naninovel/samples/blob/main/unity/inventory/Assets/NaninovelInventory/Runtime/UI/InventoryUI.cs#L246)에 사용자 정의 상태의 직렬화/역직렬화가 구현되어 있습니다.
:::

엔진의 전역 및 설정 상태에 접근하여 사용자 정의 데이터를 같이 저장할 수도 있습니다. 게임 세션에 한정되고 저장/불러오기 이벤트 구독이 필요한 게임 상태와 달리, 전역 및 설정 상태 오브젝트는 싱글톤이며 상태 관리자의 프로퍼티를 통해 직접 접근할 수 있습니다.

```csharp
[System.Serializable]
class MySettings
{
    public bool MySettingsBool;
}

[System.Serializable]
class MyGlobal
{
    public string MyGlobalString;
}

MySettings MySettings
{
    get => stateManager.SettingsState.GetState<MySettings>();
    set => stateManager.SettingsState.SetState<MySettings>(value);
}

MyGlobal MyGlobal
{
    get => stateManager.GlobalState.GetState<MyGlobal>();
    set => stateManager.GlobalState.SetState<MyGlobal>(value);
}
```

상태 오브젝트들은 타입별로 구분됩니다. 그렇지만 각각 개별적인 상태를 가지면서 같은 타입인 여러 오브젝트 인스턴스를 만들고 싶은 경우도 있을 것입니다. `GetState`와 `SetState`메소드는 그러한 오브젝트들을 구별하기 위해 모두 `instanceId` 선택적 인자를 사용할 수 있습니다.

```csharp
[System.Serializable]
class MonsterState
{
    public int Health;
}

var monster1 = stateMap.GetState<MonsterState>("1");
var monster2 = stateMap.GetState<MonsterState>("2");
```

## 사용자 정의 직렬화 핸들러

기본적으로 범용 직렬화 핸들러가 선택되면, 엔진 상태(게임 저장 파일들, 전역 상태, 사용자 설정)는 비동기식 [System.IO](https://docs.microsoft.com/en-us/dotnet/api/system.io)를 통해 직렬화됩니다. 일부 플랫폼에서는 Unity의 크로스 플랫폼 [PlayerPrefs](https://docs.unity3d.com/ScriptReference/PlayerPrefs.html)를 통해 직렬화됩니다. 직렬화 동작을 직접 지정하고 싶다면, 사용자 정의 핸들러를 사용하세요.

사용자 정의 핸들러를 추가하려면 게임 저장 슬롯을 위해서는 `ISaveSlotManager<GameStateMap>` 인터페이스를, 전역 상태를 위해서는 `ISaveSlotManager<GlobalStateMap>` 인터페이스를, 사용자 설정을 위해서는 `ISaveSlotManager<SettingsStateMap>` 인터페이스를 구현하세요. (각 인터페이스에 해당하는 클래스는 별도로 구현해야 합니다.)

구현체는 `StateConfiguration`와 `string` 인수를 사용하는 public 생성자를 가지고 있어야 합니다. 여기서 첫 번째 인자는 상태 구성 오브젝트의 인스턴스이며, 두 번째 인자는 폴더를 저장하는 경로입니다. 사용자 정의 구현에서는 이러한 인수를 반드시 사용할 필요는 없습니다.

::: warning 경고
사용자 정의 구현 타입을 ([어셈블리 정의](https://docs.unity3d.com/Manual/ScriptCompilationAssemblyDefinitionFiles.html)를 통해) 사전 정의되지 않은 어셈블리 하위에 추가할 경우, 엔진 구성 메뉴에 있는 `Type Assemblies` 목록에 어셈블리 이름을 추가하세요. 그렇지 않으면, 엔진이 사용자 정의 타입을 찾을 수 없습니다.
:::

다음은 메소드가 호출될 때 로그만 남기는, 사용자 정의 설정 직렬화 핸들러의 예제입니다.

```csharp
using Naninovel;
using System;
using UnityEngine;

public class CustomSettingsSlotManager : ISaveSlotManager<SettingsStateMap>
{
    public event Action<string> OnBeforeSave;
    public event Action<string> OnSaved;
    public event Action<string> OnBeforeLoad;
    public event Action<string> OnLoaded;
    public event Action<string> OnBeforeDelete;
    public event Action<string> OnDeleted;
    public event Action<string, string> OnBeforeRename;
    public event Action<string, string> OnRenamed;

    public bool Loading => false;
    public bool Saving => false;

    public CustomSettingsSlotManager (StateConfiguration config, string saveDir)
    {
        Debug.Log($"Ctor({saveDir})");
    }

    public bool AnySaveExists () => true;

    public bool SaveSlotExists (string slotId) => true;

    public void DeleteSaveSlot (string slotId)
    {
        Debug.Log($"DeleteSaveSlot({slotId})");
    }

    public void RenameSaveSlot (string sourceSlotId, string destSlotId)
    {
        Debug.Log($"RenameSaveSlot({sourceSlotId},{destSlotId})");
    }

    public UniTask SaveAsync (string slotId, SettingsStateMap data)
    {
        Debug.Log($"SaveAsync({slotId})");
        return UniTask.CompletedTask;
    }

    public UniTask<SettingsStateMap> LoadAsync (string slotId)
    {
        Debug.Log($"LoadAsync({slotId})");
        return UniTask.FromResult(new SettingsStateMap());
    }

    public UniTask<SettingsStateMap> LoadOrDefaultAsync (string slotId)
    {
        return LoadAsync(slotId);
    }
}
```

::: info 참고
사용자 정의 직렬화 핸들러의 이름은 자유롭게 정할 수 있습니다. `CustomSettingsSlotManager`은 예시일 뿐입니다.
:::

사용자 정의 핸들러가 구현되면 상태 구성 메뉴에 표시되며, 내장 핸들러 대신 선택할 수 있습니다.

![](https://i.gyazo.com/213bc2bb8c7cc0e62ae98a579579f313.png)
