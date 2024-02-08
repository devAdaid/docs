# 소개

Naninovel은 [Unity 게임 엔진](https://unity.com)의 확장 기능으로, [비주얼 노벨 게임](https://en.wikipedia.org/wiki/Visual_novel) 개발을 지원하기 위한 C# 프레임워크와 에디터 유틸리티로 구성되어 있습니다.

![](https://www.youtube.com/watch?v=lRxIKDU9z4k)

::: info 참고
Nannovel은 Unity로 구현할 수 있는 것들을 제한하지는 않지만, 일부 내장 기능이 올바르게 작동하기 위해서는 요구사항(지원되는 Unity 버전, 프로젝트 구성, 대상 플랫폼)을 만족해야 합니다. 자세한 내용은 [호환성 페이지](/ko/guide/compatibility)를 참조하세요.
:::

엔진을 처음 사용할 때는 [시작하기 가이드](/ko/guide/getting-started)를 반드시 읽어주세요.

특정 주제에 대해 찾고 싶다면, 웹 사이트 상단에 있는 검색창을 사용해 보세요. 자주 묻는 질문에 대한 답변이 있는 [FAQ](/ko/faq/)도 확인할 수 있습니다. 사용 가능한 모든 스크립트 커맨드, 지원되는 매개변수 및 사용 예시는 [API 참조](/ko/api/)에 나열되어 있습니다. 필요한 정보를 찾을 수 없다면, [지원팀에 문의](/ko/support/#naninovel-support)해주세요.

## 기능

다음은 Naninovel이 제공하는 기능입니다.

* [문서 기반 스크립트](/ko/guide/naninovel-scripts)
  * [일반 텍스트 라인](/ko/guide/naninovel-scripts#generic-text-lines)
  * [라벨](/ko/guide/naninovel-scripts#label-lines)
  * [인라인 커맨드](/ko/guide/naninovel-scripts#command-inlining)
  * [비주얼 에디터](/ko/guide/naninovel-scripts#visual-editor)
  * [핫 리로드](/ko/guide/naninovel-scripts#hot-reload)
  * [IDE 지원 (syntax 하이라이팅, 자동 완성 등)](/ko/guide/ide-extension)
* [텍스트 프린터](/ko/guide/text-printers)
  * [대화](/ko/guide/text-printers#dialogue-printer)
  * [풀스크린](/ko/guide/text-printers#fullscreen-printer)
  * [채팅](/ko/guide/text-printers#chat-printer)
  * [말풍선](/ko/guide/text-printers#bubble-printer)
  * [루비 문자 (후리가나) 지원](/ko/guide/text-printers.html#text-styles)
* [캐릭터](/ko/guide/characters)
  * [스프라이트 캐릭터](/ko/guide/characters#sprite-characters)
  * [분할 스프라이트 캐릭터](/ko/guide/characters#diced-sprite-characters)
  * [계층화 캐릭터](/ko/guide/characters#layered-characters)
  * [범용 캐릭터](/ko/guide/characters#generic-characters)
  * [Live2D 캐릭터](/ko/guide/characters#live2d-characters)
  * [Spine 캐릭터](/ko/guide/characters#spine-characters)
  * [캐릭터 전용 메시지 색상](/ko/guide/characters#message-colors)
  * [립싱크](/ko/guide/characters#lip-sync)
* [배경](/ko/guide/backgrounds)
  * [스프라이트 배경](/ko/guide/backgrounds#sprite-backgrounds)
  * [비디오 배경](/ko/guide/backgrounds#video-backgrounds)
  * [계층화 배경](/ko/guide/backgrounds#layered-backgrounds)
  * [범용 배경](/ko/guide/backgrounds#generic-backgrounds)
  * [씬 배경](/ko/guide/backgrounds#scene-backgrounds)
* [트랜지션 효과](/ko/guide/transition-effects)
* [원근 (Perspective) 카메라 모드](https://youtu.be/rC6C9mA7Szw)
* [특수 효과 (FX 시스템)](/ko/guide/special-effects)
* [배경음 (BGM)](/ko/guide/audio#background-music)
* [효과음 (SFX)](/ko/guide/audio#sound-effects)
* [카메라 애니메이션](/api/#camera)
* [음성 및 자동 음성 재생](/ko/guide/voicing)
* [동영상](/ko/guide/movies)
* [선택지](/ko/guide/choices)
* [사용자 정의 변수](/ko/guide/custom-variables)
* [상태 되돌리기](https://youtu.be/HJnOoUrqHis)
* [스크립트 수식](/ko/guide/script-expressions)
* [인게임 변수 입력](/api/#input)
* [스크립트 조건 분기](/api/#if)
* [저장-불러오기 시스템](/ko/guide/save-load-system)
* [동적 리소스 (메모리) 관리](https://youtu.be/cFikLjfeKyc)
* [게임 세팅](/ko/guide/game-settings)
* [CG 갤러리](/ko/guide/unlockable-items#cg-gallery)
* [해금 가능한 팁](/ko/guide/unlockable-items#tips)
* [크로스 플랫폼 입력](/ko/guide/input-processing)
* [프린터 백로그](/ko/guide/text-printers#printer-backlog)
* [텍스트 스킵](/ko/guide/text-printers#text-skipping)
* [텍스트 자동 진행](/ko/guide/text-printers#auto-advance-text)
* [UI 표시 전환](/ko/guide/user-interface#ui-toggling)
* [적응형 UI 레이아웃](/ko/guide/user-interface#adaptive-ui-layout)
* [UI customization](/ko/guide/user-interface#ui-customization)
* [관리형 텍스트](/ko/guide/managed-text)
* [현지화](/ko/guide/localization)
  * [스크립트 현지화](/ko/guide/localization#scripts-localization)
  * [리소스 현지화](/ko/guide/localization#resources-localization)
* [커뮤니티 모딩](/ko/guide/community-modding)
* [개발 콘솔](/ko/guide/development-console)
* [스크립트 되감기 및 디버깅](/ko/guide/naninovel-scripts#scripts-debug)
* [사용자 정의 커맨드](/ko/guide/custom-commands)
* [사용자 정의 액터 구현](/ko/guide/custom-actor-implementations)
* [Google Drive 연동](/ko/guide/resource-providers#google-drive)
* [비주얼 스크립팅](/ko/guide/visual-scripting)
