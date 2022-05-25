+++
aliases = ["/news-project/runtu-lite-2204x64_20220522"]
date = 2022-05-22T15:30:49Z
slug = ""
title = "Релиз дистрибутива Runtu LITE 22.04 х64 - 20220522"

+++
Представлена версия 64-разрядного дистрибутива **Runtu LITE 22.04 х64**, собранная на пакетной базе релиза **Jammy Jellyfish 22.04 LTS**. Сборка имеет базовый набор пользовательского ПО с возможностью установки на жёсткий диск.

<!--more-->

**Основные элементы системы:**

Менеджер дисплея LightDM 1.30  
Оконный менеджер Openbox 3.6.1  
Файловый менеджер PCManFM 1.3.2  
Панель рабочего стола LXPanel 0.10.1  
Менеджер сети NetworkManager 1.36.4 (pptp, l2tp, sstp, ssh, openvpn и vpnc)  
Текстовый редактор Geany 1.38  
Офисный пакет Libreoffice 7.3.3  
Браузер Firefox 100.0.2  
Видеоплеер VLC 3.0.16  
Аудиоплеер DeaDBeeF 1.8.8

Менеджер питания xfce4-power-manager  
Менеджер Bluetooth Blueman  
Звуковой сервер PulseAudio

Версия ядра: 5.15.0-30-generic  
Версия Xorg: 2:21.1.3

**Минимальные системные требования:**

RAM - 1024Mb  
CPU - x64  
HDD - 6Gb

Логин: runtu  
Пароль: пустой

**Скриншоты рабочего окружения:**

===========================

[![](https://i.ibb.co/Lz44RS4/BIOS-Syslinux-1.png)](https://ibb.co/Lz44RS4) [![](https://i.ibb.co/pWzWhj0/EFI-GRUB-1.png)](https://ibb.co/pWzWhj0) [![](https://i.ibb.co/BL4KPq6/Screen-FM.png)](https://ibb.co/BL4KPq6) [![](https://i.ibb.co/ZB6r7LS/Menu-Office.png)](https://ibb.co/ZB6r7LS) [![](https://i.ibb.co/Jtxw2LG/Menu-System-about.png)](https://ibb.co/Jtxw2LG)

[![](https://i.ibb.co/Rc3Y66f/Menu-Generic-gdmap.png)](https://ibb.co/Rc3Y66f) [![](https://i.ibb.co/qRpxwZt/Menu-Gfaph-whdd.png)](https://ibb.co/qRpxwZt) [![](https://i.ibb.co/v1q2Twz/Menu-Internet-gdu.png)](https://ibb.co/v1q2Twz) [![](https://i.ibb.co/6bv7vb2/Menu-Settings-YC.png)](https://ibb.co/6bv7vb2) [![](https://i.ibb.co/fxHgsGb/Menu-AV-vino.png)](https://ibb.co/fxHgsGb)

===========================

**Служебные комментарии:**

\- заблокирована возможность установки snap-приложений на уровне приоритетов APT. При необходимости поддержки данного типа пакетов нужно удалить конфиг /etc/apt/preferences.d/nosnap.pref и обновить индекс пакетной базы;

\- браузер **Firefox** установлен в виде deb-пакета из подключенного [PPA-репозитория Mozillateam](https://launchpad.net/\~mozillateam/+archive/ubuntu/ppa), т.к. штатно в релизе 22.04 **Firefox** поставляется в виде **snap**. Предустановлено расширение **uBlock Origin**.

Предустановлен офисный пакет **Libreoffice 7.3.3** в составе: **Writer**, **Calc**, **Impress**, **Math** и **Draw**. В меню "Офис" добавлены ярлыки для установки подсистемы печати. Если установка данного ПО не планируется (ярлыки в меню не нужны), следует удалить файл _printinstall_ в каталоге /var/lib/misc/.

Добавлены утилиты для работы с дисками:  
gnome-disk-utility;  
whdd (аналог mhdd).

Добавлен VNC-сервер **Vino** для возможности удалённого управления сеансом.

В загрузочное меню UEFI-режима добавлен пункт запуска **EFI Shell** от проекта **TianoCore EDK2**.

**Ссылки на загрузку:**

Загрузить с [Sourceforge.net](https://sourceforge.net/projects/runtu/files/runtu%2022.04/LITE/runtu-lite-22.04-amd64_20220522.iso/download)

**Файл:** runtu-lite-22.04-amd64_20220522.iso

**Размер:** 1247 Мб

**md5:** 29e51262d29440750f2190ce7e12c42b  
**sha1:** 8bd62141fa73d395e7b5706a8fb4fd60dcbb68c0

**Обсуждение тестирования** - [тема на форуме](https://forum.runtu.org/index.php/topic,8466.0.html).

**Поддержать проект:** [ссылка на тему форума](http://forum.runtu.org/index.php/topic,188.0.html).