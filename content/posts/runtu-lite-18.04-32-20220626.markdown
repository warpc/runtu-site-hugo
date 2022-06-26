+++
aliases = ["/news-project/runtu-xfce-2204x64_20220604"]
date = 2022-06-04T19:00:49Z
draft = true
slug = ""
title = "Обновление дистрибутива Runtu LITE 18.04 х32 - 20220626"

+++
Представлена x64-версия дистрибутива **Runtu XFCE 22.04 x64**, основанная на пакетной базе релиза **Jammy Jellyfish 22.04 LTS**. Дистрибутив собран с помощью **debootstrap**, установлена базовая система и рабочее окружение **XFCE 4.16**. В состав ПО включены средства для воспроизведения аудио- и видео-файлов (**DeaDBeeF** и **VLC**), офисный пакет **LibreОffice 7.3**, графический редактор **Gimp 2.10**, подсистема печати и сканирования. Для работы с Интернет предустановлены браузер **Firefox**, менеджер загрузок **uGet**, торрент-клиент **Transmission**, почтовый клиент **Thunderbird**. Для работы с жёсткими дисками имеются **GParted**, **Gnome Disks**, **WHDD**. Системное ПО позволяет осуществить настройку параметров рабочего окружения и администрирование.

<!--more-->

**Основные элементы системы:**

Менеджер дисплея LightDM  
Оконный менеджер XFWM  
Файловый менеджер Thunar 4.16.10  
Панель рабочего стола xfce4-panel 4.16.3  
Менеджер сети NetworkManager 1.36 (pptp, l2tp, vpnc, sstp, ssh, OpenVPN)  
Текстовый редактор Geany 1.38  
Графический редактор Gimp 2.10.30  
Офисный пакет Libreoffice 7.3.3  
Браузер Firefox 100.0.2  
Почтовый клиент Thunderbird 91.10.0  
Видеоплеер VLC 3.0.16  
Аудиоплеер DeaDBeeF 1.8.8

Менеджер питания xfce4-power-manager  
Звуковой сервер Pulseaudio  
Менеджер Bluetooth Blueman

Версия ядра: linux-generic 5.15.0-35  
Версия Xorg: xserver-xorg 2:21.1.3

Логин: runtu  
Пароль: пустой

**Cистемные требования:**

RAM - 2048Mb  
CPU - x86_64  
HDD - 7Gb

**Скриншоты рабочего окружения:**

===========================

[![](https://i.ibb.co/X7Z3jYk/Isolinux-BIOS.png)](https://ibb.co/X7Z3jYk) [![](https://i.ibb.co/VxbmyF1/GRUB-EFI.png)](https://ibb.co/VxbmyF1) [![](https://i.ibb.co/WkGm0vY/Splash.png)](https://ibb.co/WkGm0vY) [![](https://i.ibb.co/8bQkRN0/Desktop.png)](https://ibb.co/8bQkRN0)

[![](https://i.ibb.co/5BkdNVf/Filemanager.png)](https://ibb.co/5BkdNVf) [![](https://i.ibb.co/7XfPgyW/Terminal-VPN.png)](https://ibb.co/7XfPgyW) [![](https://i.ibb.co/ngGYpc9/Ventoy-Disks.png)](https://ibb.co/ngGYpc9) [![](https://i.ibb.co/gvCK8nq/VLC-Deadbeef.png)](https://ibb.co/gvCK8nq)

[![](https://i.ibb.co/NW5kh1t/Menu-1.png)](https://ibb.co/NW5kh1t) [![](https://i.ibb.co/xXRQ6Gp/Menu-Internet.png)](https://ibb.co/xXRQ6Gp) [![](https://i.ibb.co/x1hsK5Z/Menu-Media.png)](https://ibb.co/x1hsK5Z) [![](https://i.ibb.co/h7tvb00/Menu-Office.png)](https://ibb.co/h7tvb00)

===========================

**Служебные комментарии:**

\- в **DE XFCE4** после перехода на фреймворк **GTK3** сильно изменилось потребление системных ресурсов - нужен более мощный процессор, увеличен расход ОЗУ. По факту сборка **Runtu** с **KDE Plasma 5** потребляет аналогичное, если не меньшее количество памяти. Тем, для кого эти показатели критичны, рекомендуется использовать предыдущие версии сборок с XFCE на 18.04 или перейти на линейку дистрибутивов **LITE**.

\- заблокирована возможность установки snap-приложений на уровне приоритетов APT. При необходимости поддержки данного типа пакетов нужно удалить конфиг /etc/apt/preferences.d/nosnap.pref и обновить индекс пакетной базы;

\- браузер **Firefox** установлен в виде deb-пакета из подключенного [PPA-репозитория Mozillateam](https://launchpad.net/\~mozillateam/+archive/ubuntu/ppa), т.к. штатно в релизе 22.04 **Firefox** поставляется в виде **snap**. Предустановлено расширение **uBlock Origin**.

Предустановлен офисный пакет **Libreoffice 7.3.3** в составе: **Writer**, **Calc**, **Impress**, **Math** и **Draw**.

Добавлена утилита подготовки USB-носителя для запуска ISO-образов: **Ventoy 1.0.75**

Добавлен VNC-сервер **Vino** для возможности удалённого управления сеансом.

В загрузочное меню UEFI-режима добавлен пункт запуска **EFI Shell** от проекта **TianoCore EDK2**.

**Ссылки на загрузку:**

Загрузить с [Sourceforge.net](https://sourceforge.net/projects/runtu/files/runtu%2022.04/XFCE/runtu-xfce-22.04-amd64_20220604.iso/download)

**Файл**: runtu-xfce-22.04-amd64_20220604.iso

**Размер**: 1381 Мб

**md5**: f248ceb44596fac0499fffc1267731d8  
**sha1**: d96432a8e4ca1a7f66c6c82744f865549019aa85

**Обсуждение тестирования** - [тема на форуме](https://forum.runtu.org/index.php/topic,8475.0.html).

**Поддержать проект:** [ссылка на тему форума](http://forum.runtu.org/index.php/topic,188.0.html).