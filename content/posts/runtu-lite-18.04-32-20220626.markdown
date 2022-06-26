+++
aliases = ["/news-project/runtu-lite-1804x32_20220626"]
date = 2022-06-26T07:00:49Z
slug = ""
title = "Обновление дистрибутива Runtu LITE 18.04 х32 - 20220626"

+++
Представлена версия 32-разрядного дистрибутива **Runtu LITE 18.04 х32**, собранная на пакетной базе релиза **Bionic Beaver 18.04 LTS**. Сборка имеет базовый набор пользовательского ПО с возможностью установки на жёсткий диск и средства конфигурирования рабочего окружения. Выпуск предназначен для актуализации пакетной базы последнего релиза Ubuntu, имеющего х32 архитектуру.

<!--more-->

**Основные элементы системы:**

Менеджер дисплея LightDM 1.26  
Оконный менеджер Openbox 3.6.1  
Файловый менеджер PCManFM 1.2.5  
Панель рабочего стола LXPanel 0.9.3  
Менеджер сети NetworkManager 1.10.6 (pptp, l2tp, sstp, ssh, openvpn и vpnc)  
Текстовый редактор Geany 1.32

Браузер Seamonkey 2.53.12  
Торрент-клиент Transmission 3.00  
Менеджер загрузок Uget 2.2.3

Видеоплеер VLC 3.0.8  
Аудиоплеер DeaDBeeF 1.8.8

Менеджер питания xfce4-power-manager  
Менеджер Bluetooth Blueman  
Звуковой сервер PulseAudio

Дисковая утилита Disks 3.28.3  
Редактор разделов GParted 0.30.0  
Запись USB Ventoy 1.0.77  
Тест HDD WHDD 3.0.0

Версия ядра: 4.15.0-188-generic  
Версия Xorg: 1.19.6

**Минимальные системные требования:**

RAM - 1024Mb  
CPU - i686  
HDD - 5Gb

Логин: runtu  
Пароль: пустой

**Скриншоты рабочего окружения:**

===========================

[![](https://i.ibb.co/T4twkZt/BIOS-BOOT.png)](https://ibb.co/T4twkZt)   [![](https://i.ibb.co/WkGm0vY/Splash.png)](https://ibb.co/WkGm0vY)   [![](https://i.ibb.co/k9jTq9B/Menu-System.png)](https://ibb.co/k9jTq9B)

[![](https://i.ibb.co/RyNhwrn/Minwaita-Desktop1.png)](https://ibb.co/RyNhwrn)   [![](https://i.ibb.co/686sTSC/Black-Desktop.png)](https://ibb.co/686sTSC)   [![](https://i.ibb.co/9w2DZ0B/Graybird-Desktop.png)](https://ibb.co/9w2DZ0B)

===========================

**Служебные комментарии:**

\- установлен набор интернет-приложений **Seamonkey 2.53** (web-браузер, почтовый клиент, система агрегации новостных лент (RSS/Atom) и редактор html-страниц Composer) из репозитория [Ubuntuzilla|Sourceforge](https://sourceforge.net/projects/ubuntuzilla/files/mozilla/apt/pool/main/s/seamonkey-mozilla-build/). Набор основан на браузерном движке **Firefox 60.8**, внешний вид приведён в более привычную для пользователей Firefox компоновку. Среди предустановленных поставщиком дополнений имеется IRC-клиент Chatzilla, набор средств DOM Inspector и календарь-планировщик Lightning. Добавлены расширения uBlock Origin 1.16.4.30 (блокировщик рекламы) и SeaTab X2 0.3.3 (кнопки закрытия вкладок).

Добавлены утилиты для работы с дисками:  
gnome-disk-utility;  
whdd (аналог mhdd).

Добавлен VNC-сервер **Vino** для возможности удалённого управления сеансом.

В меню "Офис" имеются ярлыки для возможности установки Libreoffice, системы печати и сканирования. Если установка данного ПО не планируется и ярлыки в меню не нужны, следует удалить файлы _printinstall_, _lo_install_ и _scaninstall_ в каталоге /var/lib/misc/.

**Ссылки на загрузку:**

Загрузить с [Sourceforge.net](https://sourceforge.net/projects/runtu/files/runtu%2018.04/LITE/runtu-lite-18.04-i386_20220626.iso/download)

**Файл:** runtu-lite-18.04-i386_20220626.iso

**Размер:** 675 Мб

**md5:** 00ff615dac29b5653160eed134a4345b  
**sha1:** 2be660db6201446258b1b25f658087cbf9d3d879

**Обсуждение тестирования** - [тема на форуме](https://forum.runtu.org/index.php/topic,8491.0.html).

**Поддержать проект:** [ссылка на тему форума](http://forum.runtu.org/index.php/topic,188.0.html).