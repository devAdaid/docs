# Эффекты переходов

При изменении внешности фонов и персонажей с помощью команд [@back] и [@char] или при выполнении перехода сцены с помощью команд [@startTrans] и [@finishTrans] можно дополнительно указать, какой эффект перехода использовать. Например, следующая команда будет переходить на фон "River" с помощью эффекта перехода "DropFade":

```nani
@back River.DropFade
```

Если эффект перехода не задан, то по умолчанию используется кросс-фейд (перекрестное затухание).

Вы также можете указать продолжительность перехода (в секундах) с помощью параметра `time`:

```nani
@back River.DropFade time:1.5
```

Приведенное выше выражение будет вызывать переход на фон "River" с помощью перехода "DropFade" за 1,5 секунды. По умолчанию `time` для всех переходов составляет 0,35 секунды.

В случае, если вы хотите перейти к следующей команде сразу после выполнения перехода (не ждать окончания эффекта перехода), вы можете установить параметр `wait` в значение `false`. Напр.:

```nani
@back River.Ripple time:1.5 wait:false
@bgm PianoTheme
```
— Фоновая музыка "PianoTheme" начнет играть сразу же и не будет задерживаться на 1,5 секунды, пока идет переход.

Некоторые эффекты перехода также поддерживают дополнительные параметры, которыми можно управлять с помощью параметра `params`:

```nani
@back River.Ripple params:10,5,0.02
```
— установит частоту эффекта пульсации на 10, скорость на 5 и амплитуду на 0,02. Если параметр `params` не указан, то будут использоваться параметры по умолчанию.

Если вы хотите изменить выбранные параметры, вы можете пропустить другие, и они будут иметь свои значения по умолчанию:

```nani
@back River.Ripple params:,,0.02
```

Все параметры перехода имеют тип Decimal (десятичный).

Приведенные выше примеры также работают для персонажей, просто обеспечьте переход через автономный параметр `transition`:

```nani
@char CharID.Appearance transition:TransitionType params:...
```

Доступные эффекты перехода с их параметрами и значениями по умолчанию можно найти в приведенной ниже документации.

## BandedSwirl

![](https://i.gyazo.com/37432ac584ef04d94d3e4f9535fdffc4.mp4)

**Параметры**
Имя |  По умолчанию
--- | ---
Количество закруток | 5
Частота | 10

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.BandedSwirl

; Применить переход со стандартным количеством закруток, но с низкой частотой ?? defeault
@back Appearance.BandedSwirl params:,2.5
```

## Blinds

![](https://i.gyazo.com/73a259f2a513a92ef893ebd6a25e9013.mp4)

**Параметры**
Имя |  По умолчанию
--- | ---
Количество | 6

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.Blinds

; Применить переход, используя 30 полос вместо стандартных 6
@back Appearance.Blinds params:30
```

## CircleReveal

![](https://i.gyazo.com/4f914c6741a5e48a22cafe2ab242a426.mp4)

**Параметры**
Имя |  По умолчанию
--- | ---
Уровень размытия | 0.25

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.CircleReveal

; Применить переход с большим уровнем размытия
@back Appearance.CircleReveal params:3.33
```

## CircleStretch

![](https://i.gyazo.com/f09bb69a3c045eeb1f6c8ec0b9dcd790.mp4)

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.CircleStretch
```

## CloudReveal

![](https://i.gyazo.com/618ec451a9e10f70486db0bb4badbb71.mp4)

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.CloudReveal
```

## Crossfade

![](https://i.gyazo.com/dc4781a577ec891065af1858f5fe2ed1.mp4)

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.Crossfade
```

## Crumble

![](https://i.gyazo.com/e27c8477842a2092728ea0cc1ae76bda.mp4)

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.Crumble
```

## Dissolve

![](https://i.gyazo.com/b2993be8de032a65c7d813c6d749e758.mp4)

**Параметры**
Имя |  По умолчанию
--- | ---
Шаг | 99999

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.Dissolve

; Применить переход с малым шагом
@back Appearance.Dissolve params:100
```

## DropFade

![](https://i.gyazo.com/3c3840bb311ccb9fe223960f2e46f800.mp4)

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.DropFade
```

## LineReveal

![](https://i.gyazo.com/c0e5259cd3d4ed2016ab74a65a7eec63.mp4)

**Параметры**
Имя |  По умолчанию
--- | ---
Уровень размытия | 0.25
Уклон по оси X | 0.5
Уклом по оси Y | 0.5

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.LineReveal

; Применить переход с вертикальной линией слайда
@back Appearance.LineReveal params:,0,1
```

## Pixelate

![](https://i.gyazo.com/0ac9339b21303e20c524aaf6b6ca95f4.mp4)

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.Pixelate
```

## RadialBlur

![](https://i.gyazo.com/f8269fb68519c57c99643948a027a2a1.mp4)

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.RadialBlur
```

## RadialWiggle

![](https://i.gyazo.com/a401b3b93a61276ed68ededa2e75e9ae.mp4)

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.RadialWiggle
```

## RandomCircleReveal

![](https://i.gyazo.com/f6e685b13fe2d76733fd43878602eabc.mp4)

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.RandomCircleReveal
```

## Ripple

![](https://i.gyazo.com/ff1bd285dc675ca5ac04f7ae4500f1c4.mp4)

**Параметры**
Имя |  По умолчанию
--- | ---
Частота | 20
Скорость | 10
Амплитуда | 0.5

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.Ripple

; Применить переход с высокими частотой и амплитудой
@back Appearance.Ripple params:45,,1.1
```

## RotateCrumble

![](https://i.gyazo.com/8d476f466858e4788e5ad6014d6db314.mp4)

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.RotateCrumble
```

## Saturate

![](https://i.gyazo.com/ad6eb77b7065387b9cb9afd77adbc784.mp4)

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.Saturate
```

## Shrink

![](https://i.gyazo.com/8c8bf00348df28ab89813c21f8655c07.mp4)

**Параметры**
Имя |  По умолчанию
--- | ---
Скорость | 200

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.Shrink

; Применить переход с низкой скоростью
@back Appearance.Shrink params:50
```

## SlideIn

![](https://i.gyazo.com/800ee6f5fba39ab8d46f5eb09f2126cf.mp4)

**Параметры**
Имя |  По умолчанию
--- | ---
Количество слайдов | 1

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.SlideIn
```

## SwirlGrid

![](https://i.gyazo.com/5a21293d979323a112ffd07f1fffd28d.mp4)

**Параметры**
Имя |  По умолчанию
--- | ---
Сила скручивания | 15
Количество клеток | 10

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.SwirlGrid

; Применить переход с высокой силой скручивания и малым количеством клеток
@back Appearance.SwirlGrid params:30,4
```

## Swirl

![](https://i.gyazo.com/6ac9a2fe1bb9dfaf6a8292ae5d03960e.mp4)

**Параметры**
Имя |  По умолчанию
--- | ---
Сила скручивания | 15

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.Swirl

; Применить переход с высокой силой скручивания
@back Appearance.Swirl params:25
```

## Water

![](https://i.gyazo.com/7c684f9a122006f38a0be2725895b76f.mp4)

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.Water
```

## Waterfall

![](https://i.gyazo.com/b6eebcb68002064ababe4d7476139a7c.mp4)

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.Waterfall
```

## Wave

![](https://i.gyazo.com/e189ca12868d7ae4c9d8f0ca3d9dd298.mp4)

**Параметры**
Имя |  По умолчанию
--- | ---
Магнитуда | 0.1
Фаза | 14
Частота | 20

**Примеры**
```nani
; Применить переход со стандартными параметрами
@back Appearance.Wave

; Применить переход с высокой магнитудой и низкой частотой
@back Appearance.Wave params:0.75,,5
```

## Пользовательские эффекты перехода

### Маска растворения

Вы можете создавать пользовательские переходы на основе текстуры маски растворения. Маска растворения – это текстура в оттенках серого, где цвет определяет, когда пиксель перейдет к целевой текстуре. Например, рассмотрим следующую спиральную маску растворения:

![](https://i.gyazo.com/3c32e920efdf6cfb35214b6c9b617a6a.png)

– Черный квадрат в правом верхнем углу указывает, что цель перехода должна быть отображена там в самом начале перехода, а белый квадрат в центре будет совершать переход в самом конце.

Чтобы сделать пользовательский переход, используйте режим перехода `Custom` и укажите путь (относительно папки project "Resources") к текстуре маски растворения с помощью параметра `dissolve`, например:

```nani
@back Appearance.Custom dissolve:Textures/Spiral
```

Посмотрите следующее видео с примерами использования функции.

![](https://www.youtube.com/watch?v=HZjey6M2-PE)

### Пользовательский шейдер

Можно добавить полностью настраиваемый пользовательский эффект перехода с помощью пользовательского [шейдера](https://docs.unity3d.com/Manual/ShadersOverview.html) акторов.

::: warning
Данная тема требует навыков графического программирования в Unity. Мы не предоставляем никакой поддержки или учебных пособий по написанию пользовательских шейдеров; обратитесь к странице [поддержки](/ru/support/#unity-support) для получения дополнительной информации.
:::

Создайте новый шейдер и назначьте его акторам, которые должны использовать ваш новый пользовательский эффект перехода; дополнительные сведения о создании и назначении пользовательских шейдеров актеров см. в руководстве [по пользовательскому шейдеру](/ru/guide/custom-actor-shader) акторов.

Если в команде скрипта указано имя перехода, то [ключевое слово шейдера](https://docs.unity3d.com/ScriptReference/Shader.EnableKeyword.html) с тем же именем (с префиксом `NANINOVEL_TRANSITION_`) включается в материал, используемый актором.

Чтобы добавить свои собственные переходы в пользовательский шейдер актора, используйте директиву `multi_compile`, например:

```c
#pragma multi_compile _ NANINOVEL_TRANSITION_MYCUSTOM1 NANINOVEL_TRANSITION_MYCUSTOM2
```

— добавит переходы `MyCustom1` и `MyCustom2`.

Затем можно использовать условные директивы для выбора конкретного метода визуализации на основе ключевого слова перехода. При повторном использовании встроенного шейдера акторов можно реализовать пользовательские переходы с помощью метода `ApplyTransitionEffect`, который используется в обработчике фрагментов:

```c
fixed4 ApplyTransitionEffect(in sampler2D mainTex, in float2 mainUV, in sampler2D transitionTex, in float2 transitionUV, in float progress, in float4 params, in float2 randomSeed, in sampler2D cloudsTex, in sampler2D customTex)
{
    const fixed4 CLIP_COLOR = fixed4(0, 0, 0, 0);
    fixed4 mainColor = Tex2DClip01(mainTex, mainUV, CLIP_COLOR);
    fixed4 transitionColor = Tex2DClip01(transitionTex, transitionUV, CLIP_COLOR);

    #ifdef NANINOVEL_TRANSITION_MYCUSTOM1 // переход MyCustom1.
    return transitionUV.x > progress ? mainColor : lerp(mainColor / progress * .1, transitionColor, progress);
    #endif

    #ifdef NANINOVEL_TRANSITION_MYCUSTOM2 // переход MyCustom2.
    return lerp(mainColor * (1.0 - progress), transitionColor * progress, progress);
    #endif

    // Когда ключевые слова перехода не включены, по умолчанию используется кроссфейд.
    return lerp(mainColor, transitionColor, progress);
}
```

Затем вы сможете вызывать добавленные переходы таким же образом, как и встроенные, например:
```nani
@back Snow.MyCustom1
@back River.MyCustom2
```
