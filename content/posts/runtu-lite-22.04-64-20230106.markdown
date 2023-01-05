+++
aliases = ["/news-project/Lite-2204_1x64_20230106"]
date = 2023-01-05T22:00:00Z
slug = ""
title = "Обновление дистрибутива Runtu LITE 22.04 х64 - 20230106 "

+++
Представлено обновление версии 64-разрядного дистрибутива **Runtu LITE 22.04 х64** на пакетной базе релиза **Jammy Jellyfish 22.04.1 LTS**. Сборка имеет базовый набор пользовательского ПО с возможностью установки на жёсткий диск. Пакетная база актуализирована на дату **06.01.2023**г.

<!--more-->

**Основные элементы системы:**  
  
Менеджер дисплея LightDM 1.30  
Оконный менеджер Openbox 3.6.1  
Файловый менеджер PCManFM 1.3.2  
Панель рабочего стола LXPanel 0.10.1  
Менеджер сети NetworkManager 1.36.6 (dsl/pppoe, pptp, l2tp, sstp, ssh, openvpn и vpnc)  
Текстовый редактор Geany 1.38  
Офисный пакет Libreoffice 7.4.3  
Браузер Firefox 108.0.2 (+uBlock Origin)  
Видеоплеер VLC 3.0.16  
Аудиоплеер DeaDBeeF 1.8.8  
  
Менеджер питания xfce4-power-manager  
Менеджер Bluetooth Blueman  
Звуковой сервер PulseAudio  
  
Версия ядра: 5.15.0-56-generic  
Версия Xorg: 2:21.1.3  
   
  
 **Минимальные системные требования:**  
  
RAM - 1024Mb  
CPU - x64  
HDD - 8Gb  
  
Логин: runtu  
Пароль: пустой  
  
  
 **Скриншоты рабочего окружения:**  
  
===========================  
  
[![](https://i.ibb.co/Lz44RS4/BIOS-Syslinux-1.png)](https://ibb.co/Lz44RS4) [![](https://i.ibb.co/pWzWhj0/EFI-GRUB-1.png)](https://ibb.co/pWzWhj0) [![](https://i.ibb.co/BL4KPq6/Screen-FM.png)](https://ibb.co/BL4KPq6) [![](https://i.ibb.co/2SjBt4h/Menu-Office.png)](https://ibb.co/2SjBt4h) [![](https://i.ibb.co/Jtxw2LG/Menu-System-about.png)](https://ibb.co/Jtxw2LG)  
  
  
[![](https://i.ibb.co/Rc3Y66f/Menu-Generic-gdmap.png)](https://ibb.co/Rc3Y66f) [![](https://i.ibb.co/qRpxwZt/Menu-Gfaph-whdd.png)](https://ibb.co/qRpxwZt) [![](https://i.ibb.co/v1q2Twz/Menu-Internet-gdu.png)](https://ibb.co/v1q2Twz) [![](https://i.ibb.co/HhBnZ9D/Menu-Params.png)](https://ibb.co/HhBnZ9D) [![](https://i.ibb.co/fxHgsGb/Menu-AV-vino.png)](https://ibb.co/fxHgsGb)  
  
===========================  
  
 **Служебные комментарии:**  
  
\- заблокирована возможность установки snap-приложений на уровне приоритетов APT. При необходимости поддержки данного типа пакетов нужно удалить конфиг /etc/apt/preferences.d/nosnap.pref и обновить индекс пакетной базы;  
  
\- браузер **Firefox** установлен в виде deb-пакета из подключенного [PPA-репозитория Mozillateam](https://launchpad.net/\~mozillateam/+archive/ubuntu/ppa), т.к. штатно в релизе 22.04 **Firefox** поставляется в виде **snap**. Предустановлено расширение **uBlock Origin**.  
  
Предустановлен офисный пакет **Libreoffice 7.4.3\~rc2** в составе: **Writer**, **Calc**, **Impress**, **Math** и **Draw**. В меню "Офис" добавлены ярлыки для установки подсистем печати и сканирования. Если установка данного ПО не планируется (ярлыки в меню не нужны), следует удалить файлы _printinstall_ и _scaninstall_ в каталоге /var/lib/misc/.  
  
Добавлены утилиты для настройки рабочего окружения:   
**Obconf** (настройка параметров Openbox);  
**LXInput** (настройка параметров клавиатуры и мыши);  
**LXHotkey** (настройка клавиатурных сочетаний).  
  
Версия утилиты **Memtest86+** для тестирования ОЗУ в режиме BIOS/Legacy из меню LiveCD обновлена до v6.01;  
Версия утилиты **Memtest86** для тестирования ОЗУ в режиме UEFI из меню LiveCD обновлена до v10.2.  
  
Пожелания, предложения по составу и функционалу дистрибутива приветствуются.  
  
===========================  
  
 **Ссылки на загрузку:**  
  
Загрузить с [Sourceforge.net](https://sourceforge.net/projects/runtu/files/runtu%2022.04/LITE/runtu-lite-22.04.1-amd64_20230106.iso/download)  
  
**Файл:** runtu-lite-22.04.1-amd64_20230106.iso  
  
**Размер:** 1431 Мб  
  
  
**md5:** df8ed99814eecd50494e832d94148e3c  
**sha1:** 598880c53f4019d74ed7117d960eb4e48dc53a5d

Обсуждение дистрибутива в теме тестирования [Runtu LITE 22.04.1 x64 - 20230106](https://forum.runtu.org/index.php/topic,8622.0.html).

**Поддержать проект:** [ссылка на тему форума](http://forum.runtu.org/index.php/topic,188.0.html)