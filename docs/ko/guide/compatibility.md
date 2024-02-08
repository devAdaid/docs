# 호환성

## Unity 버전

지원되는 Unity 버전 범위는 `2019.4 - 2022.3` 입니다. 해당 범위 내 [LTS 스트림](https://unity.com/releases/lts-vs-tech-stream)의 최신 패치만 지원됩니다. 알바 버전, 베타 버전, LTS가 아닌 버전(예시: `2021.1` or `2022.2`)은 정식으로 지원되지 않습니다. 이러한 버전에서 Naninovel이 동작할 수도 있지만, 사용에 대한 지원을 제공하지는 않습니다. 권장하는 Unity 버전은 [2019.4.40](https://unity3d.com/unity/whats-new/2019.4.40) 입니다.

::: tip 팁
Unity는 (주요 릴리스에서는 물론이고) LTS 패치에서도 회귀(* 새로운 버전에서 이전 버전의 기능이 저하되거나 제대로 동작하지 않는 것)가 흔하게 발생합니다. 따라서 Unity 2019의 최종 릴리스이자, 일반적인 비주얼 노벨 개발에서 알려진 버그가 없는 Unity 2019.4.40 버전 사용을 권장합니다. 또한 2020 및 2021 버전은 안정성 및 성능에서 회귀가 자주 발생하는 것으로 알려져 있으므로, 최신 Unity 버전을 사용하길 원하는 경우 2022.3 버전을 사용하세요.

향후 LTS 상태에 도달한 Unity 릴리스에서 발생하는 호환성 문제는 다음 Naninovel 릴리스에서 해결될 것입니다. 과거 Naninovel 릴리스와 호환되는 Unity 버전은 [업데이트 노트](https://github.com/naninovel/docs/releases)에 명시되어 있습니다.
:::

## UPM 패키지

검증된 패키지 버전만 지원됩니다. Unity의 pakage manager를 통해 패키지를 설치하거나 업데이트할 때, 사용 중인 Unity 버전에 대한 "verified (검증됨)" 라벨이 있는지 확인하세요.

![](https://i.gyazo.com/a06f8b0cefff2fc5e578c60cae4ed33f.png)

## 플랫폼

모든 엔진 기능은 크로스 플랫폼 API를 사용하여 구현되었으며, Unity가 타겟으로 설정할 수 있는 모든 플랫폼과 호환될 것으로 예상합니다.

다음 플랫폼은 개발진에서 호환성을 테스트했으며, 공식적으로 지원됩니다.
* 스탠드얼론: Windows, Mac, Linux
* 모바일: iOS, Android
* 웹: WebGL
* 콘솔: Nintendo Switch

::: info 참고
Unity는 PlayStation, Xbox, Stadia 등 다른 다양한 플랫폼으로도 빌드할 수 있지만, 일부 기능 (예시: 저장 시스템)은 플랫폼별 SDK에 대한 액세스가 등록된 개발자에게만 제한되어 있기 때문에 정상적으로 작동하지 않을 수 있습니다. 개발진 또한 이러한 SDK에 대한 접근 권한이 없으므로, 위 목록에 없는 플랫폼에 대한 지원을 제공할 수 없습니다. 게임 콘솔 개발에 대한 자세한 내용은 [관련 아티클](https://unity.com/how-to/develop-console-video-games-unity)을 참조하세요.
:::

## 플레이 모드 진입

Naninovel은 프로젝트 설정 "Enter Play Mode Settings" 카테고리에 있는 `Reload Domain`과 `Reload Scene` 옵션을 둘 다 비활성화하는 것을 지원합니다. 이 옵션들을 비활성화하면 플레이 모드 진입 시간이 줄어들며, 대규모 프로젝트에서 특히 효과적입니다.

![](https://i.gyazo.com/dd0a3037a0bca8b73608ecc7b71c3982.png)

## 렌더 파이프라인

Naninovel과 Unity의 [스크립터블 랜더 파이프라인](https://docs.unity3d.com/Manual/render-pipelines.html) (URP 및 HDRP)을 같이 사용하는 것은 가능하지만, 일부 내장 기능이 정상적으로 작동하지 않을 수 있으며 이러한 경우에는 지원을 제공하지 않습니다. 자세한 내용은 [렌더 파이프라인 가이드](/ko/guide/render-pipelines)를 참조하세요.

## 텍스트

레거시 (uGUI) 텍스트 컴포넌트는 내장 UI 또는 관련 API에서 지원되지 않습니다. 기본적으로 [TextMesh Pro](https://docs.unity3d.com/Manual/com.unity.textmeshpro.html)가 사용됩니다.

## 관리되는 바이트코드 스트리핑

[관리되는 바이트코드 스트리핑](https://docs.unity3d.com/Manual/ManagedCodeStripping.html)의 "Medium"과 "High" 프로필은 지원되지 않습니다. 스트리핑을 비활성화하거나, "Low" 프로필(기본)을 사용하세요.

## 익셉션

"Publishing Settings"의 `Enable Exceptions` 옵션에서는 적어도 "Explicitly Thrown Exceptions Only" 레벨이 필요합니다. 이 설정은 [WebGL 빌드](https://docs.unity3d.com/Manual/webgl-building)에서만 적용됩니다. "None" 레벨은 지원되지 않습니다.
