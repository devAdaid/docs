# 시작하기

## 필수 구성 요소

Naninovel은 [Unity 게임 엔진](https://unity.com)의 확장 기능이므로, 적어도 [엔진 사용의 기초](https://learn.unity.com)를 배운 후 Naninovel을 시작하는 것을 강력히 권장합니다.

Naninovel 기능을 벗어나는 사용자 정의 게임 플레이를 구축할 계획이 없다면, Naninovel이 내부적으로 처리하고 있기 때문에 씬 (scene)과 관련된 정보는 자세히 읽지 않아도 괜찮습니다. 

## 핵심 개념

Naninovel을 설정하고 사용하기 전에, 몇 가지 핵심 개념을 훑어봅시다.

이 가이드의 나머지 부분에서 계속해서 언급되는 중요한 개념 중 하나는 <b>액터 (actor)</b>입니다. 액터는 식별자(ID), 외관, 공간(씬)에서의 위치 및 기타 다른 매개변수로 구성되는 엔터티입니다.

액터는 추상적인 개체이며, 액터 자체로서 존재할 수는 없습니다. 대신, 다음과 같이 다양한 추가 매개변수를 가진 특수한 버전이 사용됩니다:

종류 | 추가 매개변수 | 설명
--- | --- | ---
[캐릭터](/ko/guide/characters) | Look Direction (바라보는 방향) | 씬에 보이는 캐릭터를 나타냅니다.
[배경](/ko/guide/backgrounds) | 없음 | 씬에 보이는 배경을 나타냅니다. 기본적으로 캐릭터 액터의 뒷쪽에 배치됩니다.
[텍스트 프린터](/ko/guide/text-printers) | Text (텍스트), Author ID (화자 ID), Reveal Progress (표시 방법) | 시간이 지남에 따라 텍스트 메시지를 점진적으로 표시합니다.
[선택지 핸들러](/ko/guide/choices) | Choices (선택지들) | 플레이어가 고를 수 있는 선택지들 중 하나를 고를 수 있도록 합니다.

배경 위에 캐릭터가 표시되는 일반적인 비주얼 노벨 배치를 생각해 보세요.
이것은 Naninovel 용어로 다음과 같이 표현될 것입니다.

![](/assets/img/docs/actor-concept.mp4)

이제 "Kohaku" 캐릭터가 행복한 모습을 보이게 하고 싶다고 가정해봅시다. 해당 캐릭터의 여러 감정을 나타낼 수 있는 각각의 텍스처(이미지)가 있는 상황입니다. Naninovel에서는 이러한 텍스처를 액터의 <b>외관 (appearance)</b>이라고 합니다. 목표를 달성하기 위해서는, 캐릭터 액터의 외관을 변경해야 합니다. 마찬가지로 "MainBackground"가 다른 것을 표시하도록 하려면, 해당 배경 액터의 외관을 변경해야 합니다.

액터와 그 매개변수들은 [Naninovel 스크립트](/ko/guide/nanovel-scripts)에 지정된 커맨드(명령어)를 통해 조작할 수 있습니다.

또 다른 널리 사용되는 개념은 [UI](/ko/guide/user-interface)입니다. UI는 플레이어가 액터 등 게임과 상호작용하는 데에 사용됩니다. UI에는 다양한 메뉴 (타이틀, 저장-불러오기, 설정 등) 및 컨트롤 패널(자동 읽기 모드 전환, 텍스트 스킵 등)이 포함됩니다.

텍스트 프린터 및 선택지 핸들러는 둘다 액터 및 UI 요소로 간주됩니다. 즉, 액터 특성을 공유하며 Naninovel 스크립트를 통해 제어될 수 있으며, 동시에 게임과 상호작용할 수 있습니다.

프로그래밍에 익숙하다면, 소프트웨어 관점에서 이것이 어떻게 설계되었는지 [엔진 아키텍처](/ko/guide/engine-architecture) 문서를 통해 확인하실 수 있습니다.

## 새 Unity 프로젝트 생성

핵심 개념을 머릿속에 넣고, 이제 초기 설정을 시작해봅시다. 먼저 필요한 것은 Unity 프로젝트입니다. [Unity 매뉴얼](https://learn.unity.com/tutorial/creating-new-projects)을 참조하여 프로젝트 생성 방법을 확인하세요.

프로젝트 생성 시, 대부분의 경우 에디터를 2D 동작 모드로 설정하기 위해 `2D 템플릿`을 선택하게 됩니다. 이렇게 하면 기본적으로 이미지 파일이 스프라이트 에셋으로 임포트되어, 수동으로 임포트 설정을 변경할 필요가 없어지게 됩니다. 이후 [Project Settings](https://docs.unity3d.com/Manual/2DAnd3DModeSettings.html)에서 에디터 동작 모드를 2D/3D로 변경할 수 있습니다.

새 프로젝트를 생성하면, Unity는 자동으로 "Main Camera"와 (3D 템플릿을 선택했을 경우) "Directional Light"가 포함된 샘플 씬(scene) 파일을 추가합니다. Naninovel은 완전히 씬과 독립적으로 동작하므로, 씬에서 모든 오브젝트를 제거해 불필요한 성능 저하를 방지합니다. 샘플 씬 자체도 제거할 수 있지만, 몇몇 에디터 기능이 제대로 동작하려면 프로젝트에 씬이 최소 하나는 있어야 합니다.

::: tip 팁
Project Settings의 "Enter Play Mode"에서 `Reload Domain`과 `Reload Scene` 옵션을 비활성화하면, 더 빨리 플레이 모드에 진입할 수 있습니다.

![](https://i.gyazo.com/dd0a3037a0bca8b73608ecc7b71c3982.png)
:::

## Naninovel 설치

`Naninovel.package` 파일을 Unity 에디터의 project 창에 끌어다 놓습니다. (에셋 스토어에서 Naninovel을 구입한 경우, [Asset Store 메뉴](https://docs.unity3d.com/Manual/AssetStore.html)를 통해 패키지를 임포트합니다.) 이후 초기 스크립트 컴파일 및 에셋 임포트 과정이 끝나기를 기다립니다. 필요한 경우, `Naninovel` 패키지 폴더는 프로젝트 Assets 디렉토리 내에서 자유롭게 이동할 수 있습니다.

::: tip 팁
에셋 스토어에서 다운받을 수 있는 (또는 Unity의 Package Manager를 통해 제공되는) Naninovel 패키지 는 일반적으로 오래된 버전입니다. 최신 버전은 [Naninovel Discord 서버](https://discord.gg/BfkNqem)에서 다운받으세요.
:::

Naninovel을 사용하는 동안, `Assets/NaninovelData` 폴더 내에 여러 에셋 (구성, 설정, 저장 파일 등)이 자동으로 생성됩니다. Naninovel 패키지 폴더와 달리, NaninovelData 데이터 폴더는 수동으로 이동할 수 없습니다. (이동하려 할 경우, 자동으로 다시 생성됨) 데이터 폴더의 위치를 변경하고 싶다면, 엔진 구성 메뉴에서 `Generated Data Path` 항목을 수정하세요.

::: warning 주의
Naninovel 폴더 내의 내용을 저장, 수정, 제거하지 마세요. 패키지가 업데이트되면 해당 변경 사항이 손실되며, 수정된 버전의 패키지에 대한 지원도 제공하지 않습니다.
:::

## Naninovel 스크립트 추가

Naninovel 스크립트 에셋을 만들려면 `Create -> Naninovel -> Naninovel Script` 메뉴를 사용하세요.

![Naninovel 스크립트 생성](https://i.gyazo.com/be7677077abeb4f805979bd647d6d90e.png)

::: info 참고
Naninovel 스크립트 (및 다른 Naninovel 리소스들)은 모든 프로젝트 하위 폴더에 만들고 저장할 수 있으며, 원하는 대로 구성할 수 있습니다. 파일명도 자유롭게 설정할 수 있습니다. 위 그림은 단순한 예시일 뿐입니다.
:::

Naninovel 스크립트는 씬에서 무엇이 일어나는지 제어하는 텍스트 문서입니다.  (`.nani`  확장자). 스크립트 파일은 Microsoft Word, Google Docs 또는 [VS Code](https://code.visualstudio.com)와 같은 선택한 텍스트 편집기로 열고 편집할 수 있습니다.

![Naninovel 스크립트 열기](https://i.gyazo.com/f552c2ef323f9ec1171eba72e0c55432.png)

비주얼 스크립트 에디터를 사용하여 Naninovel 스크립트를 편집할 수도 있습니다. 생성된 스크립트 자산을 선택하면 비주얼 스크립트 에디터가 Inspector 창에서 자동으로 열립니다.

![](https://i.gyazo.com/ba57b9f78116e57408125325bdf66be9.mp4)

스크립트에 새로운 라인을 추가하려면, 추가하고 싶은 위치를 마우스 우클릭 또는 `Ctrl+Space` 단축키(기본 키 바인딩을 Input 구성 메뉴에서 변경할 수 있음)를 누르고, 원하는 라인 또는 커맨드 종류를 선택하세요. 라인 위치를 변경하려면 숫자 라벨을 드래그하여 원하는 위치로 이동시킵니다. 라인을 제거하려면 해당 라인을 마우스 우클릭하고 "Remove"를 선택하세요.

비주얼 에디터를 사용하여 스크립트를 변경한 경우, Inspector 창 헤더에서 스크립트 이름 위에 별표(`*`)가 표시됩니다. 이는 에셋이 수정되었으며 저장해야 함을 의미합니다. 에셋을 저장하려면 `Ctrl+S`를 누르세요. 스크립트가 수정된 상태에서 다른 에셋을 선택한다면, 수정중인 스크립트의 변경 사항을 저장하거나 취소할 수 있는 대화창이 표시됩니다.

비주얼 에디터는 외부에서 스크립트를 수정하면 자동으로 편집된 스크립트를 동기화하기 때문에, 텍스트 에디터 및 비주얼 에디터 양쪽 모두에서 스크립트를 원활하게 작성할 수 있습니다.

::: info 참고
이 가이드의 나머지 부분에서는 텍스트 에디터를 사용하지만, 원할 경우 비주얼 에디터로도 모든 단계를 진행할 수 있습니다.
:::

Naninovel 관련 에셋 (예시: 위에서 생성한 스크립트)이 엔진에 "표시"되려면, 프로젝트 리소스로 할당되어야 합니다. Create 메뉴를 통해 스크립트를 생성하면, 자동으로 프로젝트 리소스에 할당됩니다. 수동으로 스크립트 리소스를 할당하려면 에디터 상단바에서 `Naninovel -> Resources -> Scripts` 메뉴로 열 수 있는 스크립트 리소스 창을 사용하세요. 스크립트를 추가하려면 먼저 목록에 새 항목을 추가하기 위해 `+` (플러스) 버튼을 클릭하고, 그 다음 스크립트 에셋을 목록 위에 드래그하여 놓으세요. 여러 에셋이나 폴더를 목록에 드래그해 일괄 추가할 수도 있습니다.

![Naninovel 스크립트 추가](https://i.gyazo.com/b3281a145ba54e6cb6cbdaa478ea894d.png)

텍스트 편집기에서 생성한 스크립트를 열고, 다음 텍스트를 추가해보세요.

```nani
Hello World!
@stop
```

첫 번째 라인은 게임 실행 시 "Hello World!"라는 텍스트를 출력하고, 두 번째 라인은 스크립트 실행을 정상적으로 중지하기 위해 필요합니다.

플레이 모드로 진입하여 새 게임을 시작해 결과를 확인해보세요.

::: info 참고
모든 사용 가능한 내장 스크립트 커맨드, 지원되는 매개변수 및 사용 예제는 [API 레퍼런스](/ko/api/)에 나열되어 있습니다. 사용자 정의 커맨드를 추가하는 것도 가능합니다. 자세한 정보는 [사용자 정의 커맨드 가이드](/ko/guide/custom-commands)를 참조하세요.
:::

만약 타이틀 메뉴의 "NEW GAME" 버튼이 활성화되지 않은 경우, 스크립트 구성 (`Naninovel -> Configuration -> Scripts`)에서 `Start Game Script` 항목이 생성된 스크립트의 파일명과 같은지 확인하세요.

![](https://i.gyazo.com/47e34c913994a5b3e88d8f30d5127b7b.png)

::: tip 팁
Unity에서 영문자가 아닌 글자의 텍스트를 Text Mesh Pro 컴포넌트(일반적인 Unity UI 텍스트 요소)로 표시하기 위해서는, 별도의 세팅이 필요합니다. 한글로 텍스트를 표시하고 싶다면, 다음 과정을 참고해주세요.

1. 한글 폰트 에셋 임포트
2. Unity의 Font Asset Creator로 Text Mesh Pro 용 폰트 에셋 생성

    (구글에 "Unity Font Asset Creator 한글" 등의 키워드로 검색하면 자세한 방법을 찾을 수 있습니다.)
3. 폰트 에셋들을 Resources/Naninovel/Fonts 폴더 하위에 배치
4. 에디터에서 `Naninovel -> Configuration -> UI` 창 열기
5. 위에서 생성한 폰트 에셋을 Font Options에 추가. 

    (Font Name에는 폰트명을, Font Resource에는 생성한 폰트 에셋명을 입력합니다.)

폰트 변경에 관한 자세한 내용은 [폰트 변경 가이드](/ko/guide/user-interface#changing-font)를 참고해주세요.
:::

## 캐릭터 추가

Naninovel에서 캐릭터는 일반 스프라이트 및 분할 스프라이트, 애니메이팅되는 Live2D 또는 Spine 모델, 3D 메쉬를 기반으로 만들 수 있습니다. 사용자 정의 구현도 가능합니다. 이 튜토리얼에서는 스프라이트 구현을 사용합니다.

각 캐릭터는 ID와 외관 (appearance)의 모음으로 표현됩니다. 캐릭터를 추가하려면 먼저 `Naninovel -> Resources -> Characters` 메뉴로 캐릭터 관리 창을 엽니다. 캐릭터 관리 창에서 새로운 캐릭터 액터 항목을 추가하고 그 ID를 지정한 후, 레코드를 두 번 클릭하여 (또는 레코드 끝에 있는 버튼을 눌러서) 모든 외관 스프라이트를 `Resources` 목록에 추가하세요. Naninovel 스크립트와 마찬가지로, 여러 에셋 및 폴더를 목록에 드래그하여 놓을 수 있습니다.

![Add Character](https://i.gyazo.com/0c1e81ea1a20165c1bf88854df177b7f.png)

추가한 캐릭터 ID가 "Kohaku"라고 가정하겠습니다. 추가한 캐릭터를 표시하기 위해 Naninovel 스크립트를 다음과 같이 수정해봅시다.

```nani
@char Kohaku
Hello World!
@stop
```

게임을 실행하면 화면 중앙에 캐릭터 외관 스프라이트 중 하나가 나타날 것입니다. 외관을 별도로 지정하지 않은 경우, 캐릭터 ID와 같은 이름이거나 기본값 외관이 기본값으로 선택됩니다. 특정 외관을 지정하려면, 다음과 같이 캐릭터 ID 뒤에 온점(`.`)으로 구분해 외관의 이름을 추가해봅시다.

```nani
@char Kohaku.Happy
Hello World!
@stop
```

"Kohaku" 캐릭터에 "Happy"라는 이름의 외관이 추가되어 있다면, 기본값 대신 해당 스프라이트가 표시됩니다.

이제 표시되는 텍스트를 캐릭터와 연관시킬 수 있습니다. 다음과 같이 텍스트 앞에 캐릭터의 ID와 콜론(`:`)을 추가해봅시다.

```nani
@char Kohaku.Happy
Kohaku: Hello World!
@stop
```

다음과 같이 캐릭터의 외관을 텍스트와 함께 결합해 글자수를 줄일 수도 있습니다.

```nani
Kohaku.Happy: Hello World!
@stop
```

캐릭터 (또는 배경, 텍스트 프린터 등의 다른 액터)를 숨기려면, 다음과 같이 [@hide] + 대상 액터 ID의 형태로 커맨드를 사용하세요.

```nani
Kohaku.Happy: Hello World!
@hide Kohaku
@stop
```

## 배경 추가

배경 또한 캐릭터처럼 Naninovel에서 스프라이트, 일반 오브젝트, 비디오 및 씬, 사용자 정의 구현 등 여러 가지 방법으로 표현될 수 있습니다.

여러 독립적인 배경 액터를 만들 수 있지만, 일반적인 비주얼 노벨 게임에서는 하나의 액터를 사용하고 다른 외관으로 전환하며 사용하는 경우가 대부분입니다. 작업을 간소화하기 위해 기본적으로 배경 액터 목록에 `MainBackground` 액터가 추가되어 있으며, Naninovel 스크립트에서 외관을 변경할 때마다 ID를 지정할 필요가 없습니다.

`Naninovel -> Resources -> Backgrounds` 메뉴를 통해 배경 스프라이트를 추가하세요. `MainBackground` 항목은 자동으로 열리지만, 원할 경우 배경 액터 목록으로 돌아가서 다른 배경 액터를 생성할 수도 있습니다.

![배경 추가](https://i.gyazo.com/98e88780625c7f2e1ef88db7ef10d1f4.png)

추가된 배경 외관 스프라이트의 이름을 "City"라고 가정하겠습니다. 배경을 표시하려면, 다음과 같이 [@back] + 배경 외관 이름 형태로 커맨드를 사용하세요.

```nani
@back City
```

다른 배경으로 전환할 때는 크로스 페이드 [트랜지션 효과](/ko/guide/transition-effects)가 기본으로 사용됩니다. 트랜지션 효과를 변경하려면, 다음과 같이 외관 이름 다음에 전환 효과를 지정합니다.

```nani
@back City
@back School.RadialBlur
```

이 명령은 "City"를 "School"로 "RadialBlur" 트랜지션 효과를 사용하여 전환합니다.

메인 배경이 아닌 배경을 참조하려면 (예시: 여러 배경을 겹쳐서 구성하려는 경우) 액터 ID를 지정하세요. 예를 들어 메인 배경 외에 ID가 Flower인 배경 액터가 존재하는 경우, 다음 커맨드를 사용해 해당 배경의 외관을 "Bloomed"로 변경한 다음 "Withered"로 변경할 수 있습니다.

```nani
@back Bloomed id:Flower
@back Withered id:Flower
```

## 배경음 및 효과음 추가

BGM (배경음) 또는 SFX (효과음) 에셋을 추가하려면 `Naninovel -> Resources -> Audio` 에디터 메뉴를 사용하세요. [Unity에서 지원하는](https://docs.unity3d.com/Manual/AudioFiles.html) 모든 오디오 형식을 사용할 수 있습니다.

![오디오 관리](https://i.gyazo.com/cacdec36623dbbfcf9f49c594de53c0f.png)

추가한 BGM 파일명이 "ThePromenade" 라고 가정합니다. 이 트랙을 배경음으로 재생하려면, 다음과 같이 [@bgm] + 트랙 이름 형식으로 커맨드를 사용합니다.

```nani
@bgm ThePromenade
```
배경음 트랙을 전환할 때는 자동적으로 크로스 페이드 효과가 적용됩니다. 배경음은 기본적으로 루프되지만 커맨드 매개변수를 사용하여 이를 변경할 수 있으며, 볼륨 및 페이드 지속 시간 또한 변경할 수 있습니다.

반면에, 효과음은 기본적으로 루프되지 않습니다. "Explosion" 효과음을 추가했다고 가정하했을 때, 이를 재생하려면 다음과 같이 [@sfx] + 트랙 이름 형식으로 커맨드를 사용하세요.

```nani
@sfx Explosion
```

## 영상 가이드

영상 가이드를 선호하는 경우, 위 과정을 설명하는 영상 가이드 또한 준비되어 있습니다.

![](https://www.youtube.com/watch?v=wFil5vje3NE)

## 데모 프로젝트

(스토어에서 보여주고 있는 것과 동일한) 데모 프로젝트의 소스 코드 전체는 GitHub에서 제공됩니다.

[Git 클라이언트를 사용해 저장소를 클론](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)하거나 [zip 아카이브로 다운로드](https://github.com/naninovel/samples/archive/main.zip)할 수 있습니다. 데모 프로젝트와 함께 제공된 에셋은 사용자 지정 라이선스가 적용될 수 있으며, 학습 목적으로만 제공되는 것에 주의해주세요.

::: warning 경고
Naninovel 패키지는 프로젝트와 함께 제공되지 않으므로, 처음 Unity로 프로젝트를 열면 컴파일 에러가 발생합니다. Naninovel 패키지를 임포트하면 문제가 해결됩니다.
:::
