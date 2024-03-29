+++
aliases = ["/news-project/runtu-lite-20041-x64-news.html"]
date = 2020-10-04T16:31:49Z
slug = 2020-10-05T21:00:00Z
title = "Релиз дистрибутива Runtu LITE 20.04.1 х64"

+++
Представлен релиз 64-разрядного дистрибутива **Runtu LITE 20.04.1 х64**, собранный на пакетной базе релиза **Focal Fossa 20.04.1 LTS**. Сборка имеет базовый набор пользовательского ПО с возможностью установки на жёсткий диск.  
<!--more-->

**Основные элементы системы:**

Менеджер дисплея               LightDM 1.30  
Оконный менеджер              Openbox 3.6.1  
Файловый менеджер             PCManFM 1.3.1  
Панель рабочего стола         LXPanel 0.10.0  
Менеджер сети                     NetworkManager 1.22.10 (pptp, l2tp, sstp, ssh, openvpn и vpnc)  
Текстовый редактор             Geany 1.36  
Браузер                                Firefox 81.0  
Видеоплеер                          VLC 3.0.9  
Аудиоплеер                          DeaDBeeF 1.8.3

Менеджер питания              xfce4-power-manager  
Менеджер Bluetooth             Blueman  
Звуковой сервер                   PulseAudio

Версия ядра:                        5.6.0-1028-oem и 5.4.0-48-generic  
Версия Xorg:                        1.20.8

**Минимальные системные требования:**

RAM - 1024Mb  
CPU - x64  
HDD - 5Gb

Логин:    runtu  
Пароль:  пустой

**Внесённые изменения:**

_Для версии 20.04.1-amd64_202010:_  
\- Применено ядро ветки **linux-oem-20.04** (текущая версия v5.6);  
\- Пакетная база обновлена до версий 20.04.1 на 04.10.2020г;

_Для версии 20.04.1-v5.4-amd64_20201010:_  
\- Применено ядро ветки **linux-generic** (текущая версия v5.4);  
\- Пакетная база обновлена до версий 20.04.1 на 10.10.2020г;

Общие изменения:  
\- Добавлена утилита **YAD** (вывод графических диалогов, программируемых пользователем);  
\- Добавлен модуль Xorg для работы с тачпадами **Synaptics**;  
\- Добавлен апплет **Multiload-ng**, позволяющий вывести системную информацию на панель;  
\- Исправлена ошибка создания кнопок запуска из контекстного меню;  
\- Устранена одна из причин долгого завершения работы при выключении.

**Скриншоты рабочего окружения:**

===========================

[![](https://forum.runtu.org/proxy.php?request=http%3A%2F%2Flostpic.net%2Fimages%2F2020%2F06%2F07%2F9f8dd15be617b9fd23060b2f96f13442.th.png&hash=836745fd301240072e25871a42bb53206f15ca50)](http://lostpic.net/image/o6UL)    [![](https://img11.lostpic.net/2020/10/05/ce4f15b64a604ea4aeb7e189ed616b5b.th.png)](http://lostpic.net/image/yeA8)

[![](https://forum.runtu.org/proxy.php?request=http%3A%2F%2Flostpic.net%2Fimages%2F2020%2F06%2F07%2F51742283c432e482bcc474cec41b0355.th.png&hash=d0a2ddd5dca63c4dbe5e4fbc046c1cfb01e202a6)](http://lostpic.net/image/o6U2)    [![](https://img11.lostpic.net/2020/10/05/26c62f6f15e5a6a9dace1a54e79160e3.th.png)](http://lostpic.net/image/yeAj)

[![](https://forum.runtu.org/proxy.php?request=http%3A%2F%2Flostpic.net%2Fimages%2F2020%2F06%2F07%2F6be7fb9a837136988247ffd42d4fe407.th.png&hash=c3982ed5a620a6745abcf3a9d932303c72605aec)](http://lostpic.net/image/o6Us)    [![](https://forum.runtu.org/proxy.php?request=http%3A%2F%2Flostpic.net%2Fimages%2F2020%2F06%2F07%2F2e09f91d33f09a0439696278f990fbe2.th.png&hash=95d1067acc2a75505dddd2ae37ac794ec5835ccb)](http://lostpic.net/image/o6Ux)

===========================

**Служебные комментарии:**

Состав сборок одинаковый, разница только в версиях установленных ядер - **v5.4** и **v5.6**.  
  
**NVidia** официально прекратила поддержку драйвера ветки __340.*__, который предназначался для семейства видеокарт **Tesla G8x, G9x, и GT2xx**. Установить эти драйверы можно только на систему с ядром до **Linux v5.4 и Xorg 1.20** включительно. На сборку с ядром **Linux 5.6** проприетарный драйвер **nvidia-340** не установится.

Установку дистрибутива желательно проводить без доступа к Интернет, чтобы сократить время на загрузку списка пакетов в доступных репозиториях. Обновление производить после установки системы на жёсткий диск.

В меню "Офис" добавлены ярлыки для установки **LibreOffice** и подсистемы печати. Если установка данного ПО не планируется и они не нужны в меню, следует удалить файлы **printinstall** и **lo_install** в каталоге /var/lib/misc/.

**Ссылки на загрузку:**

_Версия с ядром Linux 5.4_  
  
Загрузить с [Sourceforge.net](https://sourceforge.net/projects/runtu/files/runtu%2020.04/LITE/runtu-lite-20.04.1-v5.4-amd64_20201010.iso/download)  
Загрузить с [зеркала Яндекс](https://mirror.yandex.ru/runtu/runtu%2020.04/LITE/runtu-lite-20.04.1-v5.4-amd64_20201010.iso) (будет доступна после синхронизации с SF)  
  
**Файл:** runtu-lite-20.04.1-v5.4-amd64_20201010.iso  
**Размер:** 749 Мб  
  
**md5:** 9ea399bb068df2583e1c4e978c02f17a  
**sha1:** 0afa585f3a1632a6dd09e20bad2abe939bd7e85f  
  
  
_Версия с ядром Linux 5.6_

Загрузить с [Sourceforge.net](https://sourceforge.net/projects/runtu/files/runtu%2020.04/LITE/runtu-lite-20.04.1-amd64_202010.iso/download)  
Загрузить с [зеркала Яндекс](https://mirror.yandex.ru/runtu/runtu%2020.04/LITE/runtu-lite-20.04.1-amd64_202010.iso)

**Файл:** runtu-lite-20.04.1-amd64_202010.iso
**Размер:** 753 Мб

**md5:** a1d93a9101d30f4ebc730af434349f5f  
**sha1:** 117204c3a0f60a59864e93e22d8795e2f41979ac

**Обсуждение релиза на форуме:** [Тестирование Runtu LITE 20.04.1x64](https://forum.runtu.org/index.php/topic,8173.0.html)

**Поддержать проект:** [ссылка на тему форума](http://forum.runtu.org/index.php/topic,188.0.html).