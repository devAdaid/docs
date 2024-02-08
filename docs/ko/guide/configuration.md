# 구성 (Configuration)

엔진 구성은 Unity 에디터의 `Assets/NaninovelData/Resources/Naninovel/Configuration` 폴더에 위치한 여러 스크립터블 오브젝트 에셋에 저장됩니다. 이 파일들은 Unity 에디터에서 해당 구성 메뉴를 처음 열 때 자동으로 생성됩니다.

`Naninovel -> Configuration` 또는 `Edit -> Project Settings -> Naninovel`를 사용하여 구성 메뉴를 열 수 있습니다.

모든 구성 메뉴는 [Unity의 프리셋 기능](https://docs.unity3d.com/Manual/Presets)을 지원합니다. 서로 다른 타겟 플랫폼 (예시: 모바일, 스탠드얼론, 콘솔 등)으로 배포할 때, 여러 구성 프리셋을 만드는 것이 편리합니다.

![](https://i.gyazo.com/55f5c74bfc16e1af2455034647525df3.mp4)

런타임에서 구성 오브젝트를 수정하고, 새로운 사용자 정의 구성을 추가해 런타임에서 오브젝트에 접근하는 방식을 변경할 수도 있습니다. (예시: 원격 호스트에 저장된 JSON 파일에서 구성 읽기) 자세한 내용은 사용자 정의 구성 가이드를 참조하세요.

## Audio (오디오)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Audio Loader <br> (오디오 로더) | Audio- (Addressable, Project) | 오디오 (배경음과 효과음) 리소스에 사용되는 리소스 로더 구성. |
| Voice Loader <br> (음성 로더) | Voice- (Addressable, Project) | 음성 리소스에 사용되는 리소스 로더 구성. |
| Audio Player <br> (오디오 플레이어) | Naninovel.Audio Player, Elringus.Naninovel.Runtime, Version=0.0.0.0, Culture=neutral, Public Key Token=null | 오디오 클립을 재생하는 IAudioPlayer 구현체. |
| Default Master Volume <br> (마스터 볼륨 기본값) | 1 | 게임 첫 시작 시 설정되는 마스터 볼륨. |
| Default Bgm Volume <br> (배경음 볼륨 기본값) | 1 | 게임 첫 시작 시 설정되는 배경음 볼륨. |
| Default Sfx Volume <br> (효과음 볼륨 기본값) | 1 | 게임 첫 시작 시 설정되는 효과음 볼륨. |
| Default Voice Volume <br> (음성 볼륨 기본값) | 1 | 게임 첫 시작 시 설정되는 음성 볼륨. |
| Enable Auto Voicing <br> (음성 자동 재생 활성화) | False | 활성화되면, 각 [@print] 커맨드는 연결된 음성 클립을 재생하려 시도합니다. |
| Auto Voice Mode <br> (음성 자동 재생 모드) | Text Id | 음성 자동 재생이 활성화되어 있을 때, 음성 클립을 [@print] 커맨드와 연결하는 방법을 제어합니다. <br> • Text ID — 음성 클립을 현지화 가능한 텍스트 ID에 연결합니다. 시나리오 스크립트 라인을 제거, 추가, 순서를 변경해도 연결이 끊어지지는 않습니다. 스크립트 구성 `Stable Identification` 항목이 활성화되어 있지 않다면, 표시되는 텍스트를 수정할 때 연결이 끊어질 수 있습니다. <br> • Playback Spot — 음성 클립을 스크립트 이름과 라인, 인라인 인덱스 (재생 지점)에 연결합니다. 시나리오 스크립트 라인을 제거, 추가, 순서를 변경하면 연결이 끊어집니다. 표시되는 텍스트를 수정할 때에도 연결이 끊어지지 않습니다. |
| Voice Overlap Policy <br> (음성 오버랩 정책) | Prevent Overlap | 동시에 재생되는 음성을 처리하는 방법을 지정합니다.<br> • Allow Overlap — 제한 없이 동시에 재생할 수 있도록 허용합니다.<br> • Prevent Overlap — 새로운 음성 클립을 재생하기 전에 이전에 재생 중이던 음성 클립을 중지하여, 동시에 음성이 재생되는 것을 방지합니다.<br> • Prevent Character Overlap — 캐릭터 단위로 동시에 음성이 재생되는 것을 방지합니다. (자동 음성 재생 시) 서로 다른 캐릭터의 음성과 다른 여러 [@voice] 커맨드가 동시에 재생될 수 있도록 허용합니다. |
| Voice Locales <br> (음성 Locale 태그) | Null | 주요 현지화 설정과 독립적으로 게임 설정에서 음성 언어를 선택할 수 있도록 현지화 태그를 할당합니다. |
| Default Fade Duration <br> (기본 페이드 지속 시간) | 0.35 | 오디오 재생/중지 시 볼륨 페이드 인/아웃 지속 시간의 기본 값 |
| Custom Audio Mixer <br> (사용자 지정 오디오 믹서) | Null | 오디오 그룹을 제어하기 위한 오디오 믹서. 설정하지 않으면 기본 믹서를 사용합니다. |
| Master Group Path <br> (마스터 그룹 경로) | Master | 마스터 볼륨을 제어하는 믹서 그룹의 경로. |
| Master Volume Handle Name <br> (마스터 볼륨 핸들명) | Master Volume | 마스터 볼륨을 제어하는 믹서 핸들(노출된 매개변수)의 이름. |
| Bgm Group Path <br> (배경음 그룹 경로) | Master/BGM | 배경음 볼륨을 제어하는 믹서 그룹의 경로. |
| Bgm Volume Handle Name <br> (배경음 볼륨 핸들명) | BGM Volume | 배경음 볼륨을 제어하는 믹서 핸들(노출된 매개변수)의 이름. |
| Sfx Group Path <br> (효과음 그룹 경로) | Master/SFX | 효과음 볼륨을 제어하는 믹서 그룹의 경로. |
| Sfx Volume Handle Name <br> (효과음 볼륨 핸들명) | SFX Volume | 효과음 볼륨을 제어하는 믹서 핸들(노출된 매개변수)의 이름. |
| Voice Group Path <br> (음성 그룹 경로) | Master/Voice | 음성 볼륨을 제어하는 믹서 그룹의 경로. |
| Voice Volume Handle Name <br> (음성 볼륨 핸들명) | Voice Volume | 음성 볼륨을 제어하는 믹서 핸들(노출된 매개변수)의 이름. |

</div>

## Backgrounds (배경)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Default Metadata <br> (기본 메타데이터) | Object Ref | 배경 액터를 생성할 때 사용할 메타데이터 기본값. 생성한 액터 ID에 해당하는 사용자 정의 메타데이터가 존재하지 않을 때에 기본값으로서 사용됩니다. |
| Metadata <br> (메타데이터) | Object Ref | 특정 ID를 갖는 배경 액터를 생성할 때 사용하는 메타데이터. |
| Shared Poses <br> (공유 포즈) | Object Ref | 배경 간에 공유되는 이름있는 상태(포즈). 포즈 이름은 관련 상태의 활성화 속성을 설정하기 위해 [@back] 커맨드에서 사용될 수 있습니다. |
| Scene Origin <br> (씬 원점) | (0.5, 0.0) | 관리되는 액터의 원점으로 설정할 씬에서의 참조 위치. 위치 설정에 영향을 주지 않습니다. |
| Z Offset <br> (Z축 오프셋) | 100 | 액터가 생성될 때 카메라로부터 액터까지의 초기 Z축 오프셋(깊이) |
| Z Step <br> (Z축 스텝) | 0.1 | 액터가 생성될 때 Z축 간격. [Z-fighting](https://en.wikipedia.org/wiki/Z-fighting) 문제를 해결하기 위해 사용됩니다. |
| Default Duration <br> (기본 지속 시간) | 0.35 | 모든 액터 변화(외관/위치/색조 변경 등)에 대한 기본 지속 시간(초). |
| Default Easing <br> (기본 이징) | Linear | 모든 액터 변화 애니메이션(외관/위치/색조 변경 등)에 대한 기본 [이징 함수](https://easings.net/ko). |
| Auto Show On Modify <br> (변화 시 자동 표시) | True | 변화 커맨드를 실행할 때 액터를 자동으로 표시할지 여부. |

</div>

## Camera (카메라)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Reference Resolution <br> (기준 해상도) | (1920, 1080) | 기준 해상도는 배경 텍스처의 해상도와 동일하게 설정하여, 올바른 렌더링 차원을 평가하는 데 사용합니다. |
| Reference PPU <br> (기준 PPU) | 100 | 씬 단위에 대응하는 픽셀 수. 이 값을 줄이면 모든 액터가 더 작게 나타나고, 늘리면 크게 나타납니다. 대부분의 경우 기본값인 100을 권장합니다. |
| Match Screen Width <br> (화면 너비 맞춤) | False | 기준 씬 사각형 너비를 화면 너비와 일치시킬지 여부입니다. 활성화된 경우 상대적인 (씬) 좌표는 화면 경계를 기준으로 하고, 그렇지 않다면 기준 해상도가 사용됩니다. |
| Initial Position <br> (초기 위치) | (0.0, 0.0, -10.0) | 관리되는 카메라의 초기 World 좌표입니다. |
| Custom Camera Prefab <br> (사용자 지정 카메라 프리팹) | Null | 렌더링에 사용할 Camera 컴포넌트가 부착된 프리팹입니다. 지정되지 않은 경우 기본값을 사용합니다. 카메라 속성 (배경 색상, 시야각, HDR 등)을 설정하거나 포스트 프로세싱 스크립트를 추가하려면, 원하는 카메라 설정으로 프리팹을 만들고 이 항목에 해당 프리팹을 지정하세요. |
| Use UI Camera <br> (UI 카메라 사용) | True | 전용 카메라로 UI를 렌더링할지 여부. 이 옵션은 하위 호환성을 위한 것이며 새 프로젝트에서는 비활성화하지 않아야 합니다. 비활성화할 경우 문제가 발생할 수 있습니다. (예시: 카메라 애니메이션 중에 uGUI 레이아웃이 계속 재구성됨). |
| Custom UI Camera Prefab <br> (사용자 지정 UI 카메라 프리팹) | Null | UI 렌더링에 사용할 Camera 컴포넌트가 포함된 프리팹. 지정되지 않은 경우 기본값을 사용합니다. 위 `Use UI Camera` 항목이 비활성화된 경우 영향을 미치지 않습니다. |
| Default Duration <br> (기본 지속 시간) | 0.35 | 모든 카메라 변화(줌 변경, 위치 변경, 회전 등)에 대한 기본 지속 시간(초). |
| Default Easing <br> (기본 이징) | Linear | 모든 카메라 변화 애니메이션(줌 변경, 위치 변경, 회전 등)에 대한 기본 [이징 함수](https://easings.net/ko). |
| Thumbnail Resolution <br> (썸네일 해상도) | (240, 140) | 게임 저장 슬롯을 미리보기할 때 사용되는 썸네일의 해상도. |
| Hide UI In Thumbnails <br> (썸네일에서 UI 숨기기) | False | 썸네일을 캡처할 때 UI 레이어를 무시할 지 여부. |

</div>

## Characters (캐릭터)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Auto Arrange On Add <br> (추가 시 자동 정렬) | True | 지정된 위치가 없는 새로운 캐릭터를 추가할 때, X축 상에 균등하게 배치할 지 여부. |
| Arrange Range <br> (정렬 범위)  | (0.0, 1.0) | 캐릭터가 정렬되는 범위. 씬 너비 기준 (시작, 끝) 으로 나타낸다. (값은 0.0 ~ 1.0 범위 내) |
| Default Metadata <br> 메타데이터 기본값 | Object Ref | 캐릭터 액터를 생성할 때 사용할 메타데이터 기본값. 생성한 액터 ID에 해당하는 사용자 정의 메타데이터가 존재하지 않을 때 기본값으로서 사용됩니다. |
| Metadata <br> (메타데이터) | Object Ref | 특정 ID의 캐릭터 액터를 만들 때 사용할 메타데이터. |
| Avatar Loader <br> (아바타 로더) | Character Avatars- (Addressable, Project) | 캐릭터 아바타 텍스처 리소스와 함께 사용되는 리소스 로더의 구성. |
| Shared Poses <br> (공유 포즈) | Object Ref | 캐릭터 간에 공유되는 이름있는 상태(포즈). 포즈 이름은 관련 상태의 활성화 속성을 설정하기 위해 [@char] 커맨드에서 사용될 수 있습니다. |
| Scene Origin <br> (씬 원점) | (0.5, 0.0) | 관리되는 액터의 원점으로 설정할, 씬에서의 기준점. 위치 설정에 영향을 주지 않습니다 |
| Z Offset <br> (Z축 오프셋) | 50 | 액터가 생성될 때 카메라로부터 액터까지의 초기 Z축 오프셋(깊이). |
| Z Step <br> (Z축 간격) | 0.1 | 액터가 생성될 때 액터 간 Z축 간격.  [Z-fighting](https://en.wikipedia.org/wiki/Z-fighting) 문제를 해결하기 위해 사용됩니다. |
| Default Duration <br> (기본 지속 시간) | 0.35 | 모든 액터 변화(외관/위치/색조 변경 등)에 대한 기본 지속 시간(초). |
| Default Easing <br> (기본 이징) | Smooth Step | 모든 액터 변화 애니메이션(줌 변경, 위치 변경, 회전 등)에 대한 기본 [이징 함수](https://easings.net/ko). |
| Auto Show On Modify <br> (변화 시 자동 표시) | True | 변화 커맨드를 실행할 때 액터를 자동으로 표시할지 여부. |

</div>

## Choice Handlers (선택지 핸들러)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Default Handler Id <br> (핸들러 ID 기본값) | Button List | 기본값으로 사용할 핸들러 ID. |
| Choice Button Loader <br> (선택지 버튼 로더) | - (Addressable, Project) | 사용자 정의 선택지 버튼을 로드하는 데 사용되는 리소스 로더의 구성. |
| Default Metadata <br> 메타데이터 기본값 | Object Ref | 선택지 핸들러 액터를 생성할 때 사용할 메타데이터 기본값. 생성한 액터 ID에 해당하는 사용자 정의 메타데이터가 존재하지 않을 때 기본값으로서 사용됩니다. |
| Metadata <br> (메타데이터) | Object Ref | 특정 ID의 선택지 핸들러 액터를 만들 때 사용할 메타데이터. |
| Default Duration <br> (기본 지속 시간) | 0.35 | 모든 액터 변화(외관/위치/색조 변경 등)에 대한 기본 지속 시간(초). |
| Default Easing <br> (기본 이징) | Linear | 모든 액터 변화 애니메이션(줌 변경, 위치 변경, 회전 등)에 대한 기본 [이징 함수](https://easings.net/ko). |
| Auto Show On Modify <br> (변화 시 자동 표시) | True | 변화 커맨드를 실행할 때 액터를 자동으로 표시할지 여부. |

</div>

## Custom Variables (사용자 정의 변수)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Predefined Variables <br> (사전 정의된 변수 목록) | Object Ref | 기본값으로 초기화 할 변수 목록. 전역 변수(`G_` 또는 `g_`로 시작하는 이름)는 첫 어플리케이션 시작 시 초기화되며, 다른 변수는 각 상태 재설정 시 초기화됩니다. |

</div>

## Engine (엔진)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Generated Data Path <br> (자동 생성 데이터 경로) | Naninovel Data | 자동 생성된 에셋을 저장하기 위한  (application data 디렉토리의) 상대 경로 |
| Override Objects Layer <br> (오브젝트 레이어 오버라이드) | False | 모든 엔진 오브젝트에 특정 레이어를 할당할지 여부. 엔진 카메라는 컬링 마스크에 레이어를 사용합니다. 이를 사용해 Naninovel 오브젝트가 다른 카메라에 의해 렌더링되는 것을 방지합니다. |
| Objects Layer <br> (오브젝트 레이어) | 0 | `Override Objects Layer` 옵션이 활성화되면, 지정된 레이어가 모든 엔진 오브젝트에 할당됩니다.  |
| Async Exception Log Type <br> (비동기 예외 로그 유형) | Error | UniTask 관련 예외에 사용할 로그 유형. |
| Type Assemblies <br> (타입 어셈블리) | Object Ref | 다양한 타입(예시: 액터 구현, 직렬화 핸들러, 관리되는 텍스트 등)을 찾을 때, 엔진은 더 나은 성능을 위해 지정된 어셈블리에서만 탐색하도록 합니다. (어셈블리 정의를 사용하여) Naninovel 관련 타입을 Unity의 사전 정의 어셈블리 외부에 놓는 경우, 그 어셈블리 이름을 여기에 추가합니다.<br><br>주의: 변경 사항을 적용하려면, 목록을 수정한 후 솔루션을 다시 컴파일하거나 Unity 에디터를 다시 시작하세요. |
| Initialize On Application Load<br>(어플리케이션 로드 시 초기화) | True | 애플리케이션 시작 시 엔진을 자동으로 초기화할지 여부. |
| Scene Independent<br>(씬 독립성) | True | 엔진 오브젝트에 `DontDestroyOnLoad`를 적용하여, 오브젝트의 생명을 로드된 씬에서 독립시킬지 여부. 비활성화되면, 오브젝트는 엔진이 초기화되는 Unity 씬의 일부가 되며, 씬이 언로드되면 파괴됩니다. |
| Show Initialization UI<br>(초기화 UI 표시) | True | 엔진이 초기화되는 동안 로딩 UI를 표시할지 여부. |
| Custom Initialization UI<br>(사용자 정의 초기화 UI) | Null | (활성화된 경우) 엔진이 초기화되는 동안 표시되는 UI 지정하지 않은 경우 기본값을 사용합니다. |
| Enable Bridging<br>(브리징 활성화) | False | 브리징 서버를 자동으로 시작하여 외부 Naninovel 툴(예시: IDE 확장, 웹 에디터 등)과 통신할 것인지 여부. |
| Server Port<br>(서버 포트) | 41016 | 서버가 수신할 네트워크 포트. 다른 애플리케이션이 기본 포트를 점유하고 있는 경우를 대비해, 이곳과 외부 툴의 포트를 모두 변경합니다. |
| Auto Generate Metadata<br>(메타데이터 자동 생성) | True | Unity 에디터 시작 시 프로젝트 메타데이터를 자동으로 생성할 지 여부. |
| Generate Label Metadata<br>(레이블 메타데이터 생성) | True | 스크립트 레이블 자동 완성에 사용되는 메타데이터를 생성할지 여부. 프로젝트에 많은 스크립트가 있으면 상당한 시간이 걸릴 수 있습니다. |
| Enable Development Console<br>(개발 콘솔 활성화) | True | 개발 콘솔 활성화 여부. |
| Debug Only Console<br>(디버그 전용 콘솔) | False | 활성화되면, 개발 콘솔은 개발(디버그) 빌드에서만 사용할 수 있습니다. |

</div>

## Input (입력)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Spawn Event System<br>(이벤트 시스템 스폰) | True | 초기화 시 Event System 오브젝트를 스폰할 지 여부. |
| Custom Event System<br>(사용자 정의 이벤트 시스템) | Null | 입력 처리를 위해 스폰할 `EventSystem` 컴포넌트가 있는 프리팹. 지정되지 않은 경우 기본값을 스폰합니다. |
| Spawn Input Module<br>(입력 모듈 스폰) | True | 초기화할 때 Input Module 오브젝트를 스폰할지 여부. |
| Custom Input Module<br>(사용자 정의 입력 모듈) | Null | 입력 처리를 위해 스폰할 `InputModule` 컴포넌트가 있는 프리팹. 지정되지 않은 경우 기본값을 스폰합니다. |
| Input Actions<br>(입력 액션) | Null | Unity의 새로운 입력 시스템이 설치되면, 여기에 입력 액션(Input Action) 에셋을 할당하세요.<br><br>입력 액션을 Naninovel 입력 바인딩에 매핑하려면, `Naninovel` 액션 맵을 생성하고 바인딩 이름(`Control Scheme -> Bindings list` 하위에서 찾을 수 있음)과 동일한 이름의 액션을 추가합니다.<br><br>주의:2D (Vector2) 축(axes)은 지원되지 않습니다. |
| Process Legacy Bindings<br>(레거시 바인딩 처리) | True | 레거시 입력 바인딩을 처리할지 여부. Unity의 새 입력 시스템을 사용하여, 입력 액션 외에 레거시 바인딩이 작동하지 않기를 바라는 경우 비활성화힙니다. |
| Touch Frequency Limit<br>(터치 빈도 제한) | 0.1 | 등록된 터치 입력의 빈도 제한. (단위: 초 당) 레거시 입력 전용. |
| Touch Distance Limit<br>(터치 거리 제한) | 25 | 등록된 터치 입력의 거리 제한 (단위: 픽셀 당) 레거시 입력 전용. |
| Detect Input Mode<br>(입력 모드 감지) | True | 연결된 기기가 활성화되면 입력 모드를 변경할지 여부. 예를 들어 게임패드 버튼을 누르면 게임패드 입력 모드로 전환하고, 마우스 버튼을 누르면 다시 마우스 입력 모드로 전환합니다. Unity의 새 입력 시스템이 필요합니다. |
| Bindings<br>(바인딩) | Object Ref | 입력을 처리할 바인딩. [입력 처리 가이드](/ko/guide/input-processing)에서 각 기본 입력에 대한 설명을 참조하세요. |

</div>

## Localization (현지화)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Loader<br>(로더) | Localization- (Addressable, Project) | 현지화 리소스와 함께 사용되는 리소스 로더의 구성. |
| Languages<br>(언어) | Object Ref | 언어 표시 이름 기본값과 매핑된 RFC5646 언어 태그. 변경 사항을 적용하려면 Unity 에디터를 재시작하세요. |
| Source Locale<br>(원본 언어 로케일) | En | 원본 프로젝트 리소스의 로케일. (프로젝트 에셋들이 작성되는 언어) |
| Default Locale<br>(기본 Locale) | Null | 게임 첫 실행 시 기본적으로 선택되는 로케일. 지정하지 않은 경우 `Source Locale` 항목 값이 선택됩니다. |

</div>

## Managed Text (관리되는 텍스트)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Loader<br>(로더) | Text- (Addressable, Project) | 관리되는 텍스트 문서와 함께 사용되는 리소스 로더의 구성. |
| Multiline Categories<br>(멀티 라인 카테고리) | Object Ref | 멀티 라인 문서 형식을 사용할 문서 카테고리 (로컬 리소스 경로). |

</div>

## Movies (동영상)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Loader<br>(로더) | Movies- (Addressable, Project) | 동영상 리소스와 함께 사용되는 리소스 로더의 구성. |
| Skip On Input<br>(입력 시 스킵) | True | 사용자가 `cancel` 입력 키를 활성화했을 때 동영상 재생을 스킵할지 여부. |
| Skip Frames<br>(프레임 스킵) | True | 현재 시간을 따라잡기 위해 프레임을 스킵할지 여부. |
| Fade Duration<br>(페이드 지속 시간) | 1 | 동영상 재생을 시작/종료하기 전에 페이드 인/아웃되는 시간(초) |
| Custom Fade Texture<br>(사용자 정의 페이드 텍스처) | Null | 페이딩하는 중 표시할 텍스처. 지정하지 않은 경우 검은 단색 텍스쳐를 사용합니다. |
| Play Intro Movie<br>(인트로 동영상 재생) | False | 엔진 초기화 후 메인 메뉴를 표시하기 전 동영상을 자동으로 재생할지 여부. |
| Intro Movie Name<br>(인트로 동영상 이름) | Null | 인트로 동영상 리소스 이름. |

</div>

## Resource Provider (리소스 제공자)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Resource Policy<br>(리소스 정책) | Static | 스크립트 실행 중 리소스가 로드/언로드되는 시점을 지정합니다.<br>• Static — 스크립트 실행에 필요한 모든 리소스는 스크립트 재생을 시작할 때 미리 로드되고 (로딩 화면으로 가려짐) 스크립트 재생이 완료된 경우에만 언로드됩니다.  이 정책은 기본값이며 대부분의 경우 권장됩니다.<br>• Dynamic — 다음 `동적 정책 단계 (Dynamic Policy Steps)` 커맨드에 필요한 리소스만 스크립트 실행 중 미리 로드되고, 사용되지 않는 모든 리소스는 즉시 언로드됩니다. 타겟 플랫폼의 메모리 제한이 엄격하며, Naninovel 스크립트를 이에 맞추어 적절하게 구성하는 것이 불가능할 때 이 모드를 사용하세요. 게임이 진행되는 동안 리소스가 백그라운드에 로드되면, 깜빡이는 현상이 나타날 것으로 예상됩니다. |
| Dynamic Policy Steps<br>(동적 정책 단계) | 25 | Resource Policy 항목이 Dynamic으로 설정되어 있을 때, 미리 로드할 스크립트 커맨드 수를 정의합니다.  |
| Optimize Loading Priority<br>(로딩 우선순위 최적화) | True | Resource Policy 항목이 Dynamic으로 설정되어 있을 때, 이 옵션을 활성화되어 있다면 Unity의 백그라운드 로딩 스레드 우선순위가 낮게 설정됩니다. 이를 통해 스크립트 재생 중 리소스를 로드할 때 발생하는 깜빡임 문제를 방지합니다. |
| Log Resource Loading<br>(리소스 로딩을 로깅) | False | 로딩 화면에서 리소스 로드 작업을 로그로 남길지 여부. |
| Enable Build Processing<br>(빌드 프로세싱 활성화) | True | Naninovel 리소스로 할당된 에셋을 처리하기 위한, 사용자 정의 빌드 플레이어 핸들을 등록할 지 여부.<br><br>주의: 이 설정을 적용하면 Unity 에디터를 다시 시작해야 합니다. |
| Use Addressables<br>(어드레서블 사용) | True | 어드레서블 에셋 시스템(Addressable Asset System)이 설치되었을 때, 이 속성을 활성화하면 에셋 처리 단계가 최적화되어 빌드 시간이 향상됩니다. |
| Auto Build Bundles<br>(자동 빌드 번들) | True | 플레이어를 빌드할 때 어드레서블 에셋 번들을 자동으로 빌드할지 여부. `Use Addressables` 항목이 비활성화된 경우 효과가 없습니다. |
| Allow Addressable In Editor<br>(에디터에서 어드레서블 허용) | False | 에디터에서 어드레서블 제공자를 사용할지 여부. Naninovel의 리소스 관리자에게 리소스를 할당하는 대신, 어드레서블 주소를 통해 수동으로 리소스를 노출하길 원할 경우 활성화하세요. 이 기능을 활성화하면 리소스가 리소스 관리자와 어드레서블 주소 양쪽에 등록된 후 이름을 변경하거나 복제할 때 문제가 발생할 수 있으니, 주의하세요. |
| Group By Category<br>(카테고리별 그룹) | False | Naninovel 리소스 카테고리별 어드레서블 그룹 생성 여부. (카테고리 예시: 스크립트, 캐릭터, 오디오 등) When disabled, will use a single `Naninovel` group for all the resources. |
| Extra Labels<br> (추가 레이블) | Null | 어드레서블 제공자는 Naninovel 레이블 외에도 레이블이 할당된 에셋에서만 동작합니다. 사용자 정의 기준(예시: HD vs SD 텍스처)에 따라 엔진에서 사용되는 에셋을 필터링하는 데 사용할 수 있습니다. |
| Local Root Path<br>(로컬 루트 경로) | %DATA%/Resources | 로컬 리소스 공급자에 사용할 경로 루트입니다. 리소스가 위치한 폴더에 대한 절대 경로이거나 사용 가능한 원본 중 하나의 상대 경로일 수 있습니다. <br> • %DATA% — 타겟 기기의 게임 데이터 폴더 (UnityEngine.Application.dataPath).<br> • %PDATA% — 타겟 기기의 persistent 데이터 디렉터리 (UnityEngine.Application.persistentDataPath).<br> • %STREAM% — `StreamingAssets` 폴더 (UnityEngine.Application.streamingAssetsPath).<br> • %SPECIAL{F}% — OS 특수 폴더 (여기서 F는 System.Environment.SpecialFolder의 값). |
| Video Stream Extension<br>(비디오 스트림 확장자) | .mp 4 | WebGL에서 동영상을 스트리밍할 때 (영상, 동영상 배경), 동영상 파일의 확장자를 지정합니다. |
| Project Root Path<br>(프로젝트 루트 경로) | Naninovel | 하위에 Naninovel 관련 에셋이 위치하는, `Resources` 폴더에 대한 상대 경로. |

</div>

## Script Player (스크립트 플레이어)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Default Skip Mode<br>(스킵 모드 기본값) | Read Only | 게임을 처음 시작할 때 설정되는 스킵 모드의 기본값. |
| Skip Time Scale<br>(스킵 시 Time Scale) | 10 | 스킵(빨리 감기) 모드일 때 사용하는 Time Scale 값. |
| Min Auto Play Delay<br>(자동 재생 모드 최소 딜레이) | 3 | 자동 재생 모드에서 다음 커맨드를 실행하기 전까지 대기하는 최소 시간 (초). |
| Complete On Continue<br>(계속하기 시 완료) | True | `Continue` 입력이 활성화되면 시간이 지남에 따라 수행되는 차단 (`wait:true`) 커맨드 (예시: 애니메이션, 숨김/표시, 색조 변경 등)를 즉시 완료할지 여부. |
| Show Debug On Init<br>(초기화 시 디버그 창 표시) | False | 엔진 초기화 시 플레이어에게 디버그 창을 표시할지 여부. |
| Wait By Default<br>(대기 기본값) | True | `wait` 파라미터가 명시적으로 지정되지 않은 경우 재생된 커맨드를 대기할지 여부. |
| Unload Assets On Play<br>(플레이 중 에셋 언로드) | True | 스크립트 재생을 시작하기 전에, 사용하지 않는 에셋을 강제로 언로드할지 여부. 어드레서블을 사용할 때 메모리에서 릴리스된 에셋을 언로드할 때 필요합니다. |
| Load On Goto<br>(goto 커맨드 사용 시 로드) | True | [@goto] 커맨드가 다른 스크립트를 로드해야 할 때,  `ILoadingUI`를 표시할지 여부. 리소스를 사전 로딩하는 과정을 로딩 화면으로 가리는 것을 허용합니다. |
| Resolve Mode<br>(리졸브 모드) | Nearest | 상태를 로드할 때 스크립트 플레이어가 누락된 재생 지점을 처리하도록 맡기는 모드. 플레이어가 시나리오 스크립트 플레이 중에 게임을 저장한 이후에 (게임 업데이트 등을 통해) 스크립트가 변경되어, 저장된 재생 지점(라인 및 인라인 인덱스)을 더 이상 사용할 수 없을 때 이러한 문제가 발생할 수 있습니다.<br> • Nearest — 가장 가까운 다음 지점에서 플레이를 시도합니다. (스크립트가 더 짧아져) 다음 지점을 찾지 못한 경우, 가장 가까운 이전 지점에서 시작합니다. 가장 관대한 모드이지만, 정의되지 않은 동작이 발생할 수 있습니다.<br> • Restart — 처음부터 현재 스크립트를 재생합니다. 모든 상태가 시나리오 스크립트에 한정되어 있다면 정의되지 않은 동작을 유발하지는 않겠지만, 플레이어는 처음부터 스크립트를 다시 재생해야 합니다.<br> • Error — 오류를 던집니다. 정의되지 않은 동작을 허용하지 않으려면 이 옵션을 선택하세요. |

</div>

## Scripts (스크립트)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Loader<br>(로더) | Scripts- (Addressable, Project) | Naninovel 스크립트 리소스와 함께 사용되는 리소스 로더의 구성. |
| Script Parser<br>(스크립트 파서) | Naninovel.Script Parser, Elringus.Naninovel.Runtime, Version=0.0.0.0, Culture=neutral, Public Key Token=null | 텍스트에서 스크립트 에셋을 생성하는데 사용할 IScriptParser 구현. 이 항목을 수정한 후 스크립트 에셋을 리임포트해야 합니다. |
| Stable Identification<br>(안정적 식별) | False | 임포트한 스크립트의 모든 지역화 가능한 텍스트 매개변수에 식별자를 자동으로 쓸지 여부. 텍스트 내용을 편집하는 동안 (지역화, 음성 등과의) 연결을 유지하기 위해 활성화합니다. 변경 내용을 적용하려면 스크립트를 리임포트해야 합니다. |
| Initialization Script<br>(초기화 스크립트) | Null | 엔진 초기화 직후 재생할 스크립트 이름. |
| Title Script<br>(타이틀 스크립트) | Null | 타이틀 UI를 표시할 때 재생할 스크립트 이름. 타이틀 화면 씬에서 사용할 수 있습니다. (배경, 배경음 등) |
| Start Game Script<br>(게임 첫 시작 시 스크립트) | Null | 새 게임을 시작할 때 재생할 스크립트의 이름. 지정하지 않은 경우 사용가능한 스크립트 중 첫번째 것을 사용합니다. |
| Auto Add Scripts<br>(스크립트 자동 추가) | True | 생성된 Naninovel 스크립트를 리소스에 자동으로 추가할 것인지 여부. |
| Hot Reload Scripts<br>(스크립트 핫 리로드) | True | 스크립트를 (바주얼 에디터 및 외부 에디터를 통해) 수정해서 다시 로드할 때, 플레이 모드를 유지한 채로 변경 사항을 적용할 지 여부. |
| Watch Scripts<br>(스크립트 변경 감지) | True | 프로젝트 내 `.nani` 파일 변경 사항을 파일 시스템 감시자(watcher)가 탐지할 수 있도록 할지 여부. 외부 애플리케이션으로 편집할 때, 스크립트 변경 사항을 등록하는 데 필요합니다. |
| Watched Directory<br>(변경 감지 디렉토리) |  | `Watch Scripts` 항목이 활성화되어 있을 때, 변경 사항을 감지할 범위를 전체 프로젝트 대신 특정 디렉토리에 한정하면 CPU 사용량을 줄일 수 있습니다. |
| Count Total Commands<br>(총 커맨드 개수 계산) | False | 서비스 초기화 시, 사용 가능한 모든 Naninovel 스크립트에 존재하는 커맨드 개수를 계산할 지 여부. 스크립트 매니저의 `TotalCommandsCount` 속성이나 Naninovel 스크립트 수식의 `CalculateProgress` 함수를 사용하지 않으면, 엔진 초기화 시간을 줄이기 위해 비활성화하세요. |
| Show Script Navigator<br>(스크립트 네비게이터 표시) | False | 엔진 초기화 후 스크립트 네비게이터 UI를 자동으로 표시할지 여부. (UI 리소스에서 `IScriptNavigatorUI`가 있어야 함.) |
| Enable Visual Editor<br>(비주얼 에디터 활성화) | True | 스크립트가 선택되면 비주얼 스크립트 에디터를 표시할지 여부. |
| Hide Unused Parameters<br>(사용되지 않은 매개변수 숨기기) | True | 라인이 hover(마우스 포인터가 올려짐)되거나 focus(마우스/키보드 등으로 선택됨)되지 않았을 때, 커맨드 라인의 할당되지 않은 매개변수를 숨길지 여부. |
| Select Played Script<br>(재생된 스크립트 선택) | True | 비주얼 에디터가 열려 있을 때, 현재 재생되고 있는 스크립트를 자동으로 선택할지 여부. |
| Insert Line Key<br>(라인 삽입 키) | Space | 비주얼 에디터가 선택되어 있을 때. `Insert Line` (라인 삽입) 창을표시하는 단축키. 비활성화하려면 `None`으로 설정합니다. |
| Insert Line Modifier<br>(라인 삽입 수식키) | Control | `Insert Line Key`의 수식키. 비활성화하려면 `None`으로 설정합니다. |
| Save Script Key<br>(스크립트 저장 키) | S | 비주얼 에디터가 선택되어 있을 때, 수정된 스크립트를 저장(직렬화)하는 단축키. 비활성화하려면 `None`으로 설정합니다. |
| Save Script Modifier<br>(스크립트 저장 수식키) | Control | `Save Script Key`의 수식키. 비활성화하려면 `None`으로 설정합니다. |
| Rewind Mouse Button<br>(되감기 마우스 버튼) | 0 | 비주얼 에디터에서 라인을 클릭했을 때, 되감기를 활성화하는 마우스 버튼. `0`은 왼쪽, `1`은 오른쪽, `2`는 중앙 버튼입니다. 비활성화하려면 `-1`로 설정합니다. |
| Rewind Modifier<br>(되감기 수식키) | Shift | `Rewind Mouse Button`의 수식키. 비활성화하려면 `None`으로 설정합니다. |
| Editor Page Length<br>(에디터 페이지 길이) | 300 | 비주얼 에디터 페이지당 표시하는 스크립트 라인 개수. |
| Editor Custom Style Sheet<br>(에디터 사용자 정의 스타일 시트) | Null | 비주얼 에디터의 기본 스타일을 수정할 수 있습니다. |
| Graph Orientation<br>(그래프 방향) | Horizontal | 그래프를 수직(vertical) 또는 수평(horizontal)으로 만들 것인지 여부. |
| Graph Auto Align Padding<br>(그래프 자동 정렬 간격) | (10.0, 0.0) | 자동 정렬 시 각 노드에 적용할 패딩(간격). |
| Show Synopsis<br>(시놉시스 표시) | True | 그래프 노드 내부 스크립트의 첫 주석 라인을 표시할지 여부. |
| Graph Custom Style Sheet<br>(그래프 사용자 정의 스타일 시트) | Null | 스크립트 그래프의 기본 스타일을 수정할 수 있습니다. |
| Enable Community Modding<br>(커뮤니티 모딩 활성화) | False | 빌드에 외부 Naninovel 스크립트를 추가할 수 있는지 여부. |
| External Loader<br>(외부 로더) | Scripts- (Local) | 외부 Naninovel 스크립트 리소스와 함께 사용되는 리소스 로더의 구성. |

</div>

## Spawn (스폰)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Loader<br>(로더) | Spawn- (Addressable, Project) | 스폰 리소스와 함께 사용되는 리소스 로더의 구성. |

</div>

## State (상태)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Save Folder Name<br>(저장 폴더 이름) | Saves | 게임 데이터 폴더 내에 생성됩니다. |
| Default Settings Slot Id<br>(설정 슬롯 ID 기본값) | Settings | 설정 저장 파일의 이름. |
| Default Global Slot Id<br>(전역 슬롯 Id 기본값) | Global Save | 전역 저장 파일의 이름. |
| Save Slot Mask<br>(저장 슬롯 파일 이름 형식) | Game Save{0:000} | 저장 슬롯 파일 이름의 형식. |
| Quick Save Slot Mask<br>(빠른 저장 슬롯 파일 이름 형식) | Game Quick Save{0:000} | 빠른 저장 슬롯 파일 이름의 형식. |
| Save Slot Limit<br>(저장 슬롯 제한) | 99 | 저장 슬롯의 최대 개수. |
| Quick Save Slot Limit<br>(빠른 저장 슬롯 제한) | 18 | 빠른 저장 슬롯의 최대 개수. |
| Binary Save Files<br>(바이너리 저장 파일) | True | 텍스트 파일(.json)이 아닌 바이너리 파일(.nson)으로 저장 파일을 압축하고 저장하는지 여부. 이렇게 하면 파일 크기가 크게 줄어들고 편집하기가 어려워지지만 (사용자가 직접 수정하는 것 방지), 저장 및 불러오기 시 메모리 및 CPU 시간이 더 많이 소모됩니다. |
| Reset On Goto<br>(Goto 시 리셋) | False | [@goto] 커맨드를 통해 다른 스크립트를 로드할 때, 엔진 서비스 상태를 재설정할 지 여부. [@resetState] 커맨드 대신 사용하여 각 goto 마다 모든 리소스를 자동으로 언로드할 수 있습니다. |
| Enable State Rollback<br>(상태 롤백 사용) | True | 플레이어가 스크립트를 뒤로 되감을 수 있는 상태 롤백 기능을 활성화할지 여부. |
| State Rollback Steps<br>(상태 롤백 개수) | 1024 | 런타임에 보관할 상태 스냅샷의 수. 롤백(되감기)을 얼마나 수행할 수 있는지 결정합니다. 이 값을 높이면 메모리가 더 많이 소모됩니다. |
| Saved Rollback Steps<br>(롤백 단계 저장 개수) | 128 | 저장 게임 슬롯에서 직렬화(저장)되는 상태 스냅샷의 개수. 저장된 게임을 불러온 후 롤백을 얼마나 수행할 수 있는지 결정합니다. 이 값을 높이면 게임 저장 파일의 용량이 커집니다. |
| Game State Handler<br>(게임 상태 핸들러) | Naninovel.Universal Game State Serializer, Elringus.Naninovel.Runtime, Version=0.0.0.0, Culture=neutral, Public Key Token=null | 로컬(세션별) 게임 상태 직렬화/역직렬화를 담당하는 구현체. 사용자 정의 직렬화 핸들러를 추가하는 방법은 [상태 관리 가이드](/ko/guide/state-management)를 참조하세요. |
| Global State Handler<br>(전역 상태 핸들러) | Naninovel.Universal Global State Serializer, Elringus.Naninovel.Runtime, Version=0.0.0.0, Culture=neutral, Public Key Token=null | 전역 게임 상태 직렬화/역직렬화를 담당하는 구현체. 사용자 정의 직렬화 핸들러를 추가하는 방법은 [상태 관리 가이드](/ko/guide/state-management)를 참조하세요 |
| Settings State Handler<br>(설정 상태 핸들러) | Naninovel.Universal Settings State Serializer, Elringus.Naninovel.Runtime, Version=0.0.0.0, Culture=neutral, Public Key Token=null | 게임 설정 상태 직렬화/역직렬화를 담당하는 구현체. 사용자 정의 직렬화 핸들러를 추가하는 방법은 [상태 관리 가이드](/ko/guide/state-management)를 참조하세요 |

</div>

## Text Printers (텍스트 프린터)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Default Printer Id<br>(프린터 ID 기본값) | Dialogue | 기본값으로 사용할 텍스트 프린터 ID. |
| Default Base Reveal Speed<br>(기본 표시 속도 기본값) | 0.5 | 게임을 처음 시작할 때 설정되는 (게임 설정에서 조정할 수 있는) 기본 표시 속도 `Base reveal speed`의 기본값. |
| Default Base Auto Delay<br>(기본 자동 지연 시간 기본값) | 0.5 | 게임을 처음 시작할 때 설정되는 (게임 설정에서 조정할 수 있는) 기본 자동 지연 시간 `Base auto delay`의 기본값. |
| Max Reveal Delay<br>(표시 지연 시간 최댓값) | 0.06 | 텍스트 메시지를 표시할 때 지연 시간 (초 단위). 게임 설정의 `Message speed` 항목을 통해 표시 속도를 지정할 수 있습니다. 이 값은 범위의 최댓값을 지정합니다. (높을수록 표시 속도가 낮아짐) |
| Max Auto Wait Delay<br>(자동 대기 지연 시간 최댓값) | 0.02 | 자동 재생 모드에서 문자 하나를 표시할 때마다 지연 시간 제한 (초 단위). 게임 설정의 `Auto delay` 항목을 통해 지연 시간을 지정할 수 있습니다. 이 값은 범위의 최댓값을 결정합니다. |
| Scale Auto Wait<br>(자동 대기 조정) | True | 표시 커맨드에 설정된 표시 속도에 맞추어 자동 재생 모드의 대기 시간을 조정할지 여부. |
| Default Metadata <br> 메타데이터 기본값 | Object Ref | 텍스트 프린터 액터를 생성할 때 사용할 메타데이터 기본값. 생성한 액터 ID에 해당하는 사용자 정의 메타데이터가 존재하지 않을 때 기본값으로서 사용됩니다. |
| Metadata <br> (메타데이터) | Object Ref | 특정 ID의 선택지 텍스트 프린터 액터를 만들 때 사용할 메타데이터. |
| Scene Origin <br> (씬 원점) | (0.5, 0.0) | 관리되는 액터의 원점으로 설정할, 씬에서의 기준점. 위치 설정에 영향을 주지 않습니다 |
| Z Offset <br> (Z축 오프셋) | 0 | 액터가 생성될 때 카메라로부터 액터까지의 초기 Z축 오프셋(깊이). |
| Z Step <br> (Z축 간격) | 0 | 액터가 생성될 때 액터 간 Z축 간격.  [Z-fighting](https://en.wikipedia.org/wiki/Z-fighting) 문제를 해결하기 위해 사용됩니다. |
| Default Duration <br> (기본 지속 시간) | 0.35 | 모든 액터 변화(외관/위치/색조 변경 등)에 대한 기본 지속 시간(초). |
| Default Easing <br> (기본 이징) | Linear | 모든 액터 변화 애니메이션(줌 변경, 위치 변경, 회전 등)에 대한 기본 [이징 함수](https://easings.net/ko). |
| Auto Show On Modify <br> (변화 시 자동 표시) | False | 변화 커맨드를 실행할 때 액터를 자동으로 표시할지 여부. |

</div>

## UI

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| UI Loader<br>(UI 로더) | UI- (Addressable, Project) | UI 리소스와 함께 사용되는 리소스 로더의 구성. |
| Font Loader<br>(폰트 로더) | Fonts- (Addressable, Project) | 폰트 리소스와 함께 사용되는 리소스 로더의 구성. |
| Override Objects Layer <br> (오브젝트 레이어 오버라이드) | True | 엔진에서 관리되는 모든 UI 오브젝트에 특정 레이어를 할당할지 여부.  `Toggle UI`같은 일부 내장 기능에 필요합니다. |
| Objects Layer <br> (오브젝트 레이어) | 5 | `Override Objects Layer` 옵션이 활성화되면, 지정된 레이어가 엔진에서 관리되는 모든 UI 오브젝트에 할당됩니다.  |
| Font Options<br>(폰트 옵션 목록) | Object Ref | 플레이어가 게임 설정 UI에서 선택할 수 있는 폰트 옵션 목록. (`Default`에서도 사용) |
| Default Font<br>(폰트 기본값) | Null | 게임을 처음 시작할 때 기본적으로 적용되는 `Font Options`내 폰트 이름. 지정되지 않은 경우, `Default` 폰트가 적용됩니다. |

</div>

## Unlockables (수집 가능 요소)

<div class="config-table">

| 항목 | 기본값 | 설명 |
--- | --- | ---
| Loader<br>(로더) | Unlockables- (Addressable, Project) | 수집 가능 요소 리소스와 함께 사용되는 리소스 로더의 구성. |

</div>

