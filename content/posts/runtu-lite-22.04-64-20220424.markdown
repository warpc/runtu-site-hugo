+++
aliases = ["/news-project/runtu-lite-2204x64"]
date = 2022-04-24T16:31:49Z
slug = ""
title = "Релиз дистрибутива Runtu LITE 22.04 х64 - 20220424"

+++
Представена версия 64-разрядного дистрибутива **Runtu LITE 22.04 х64**, собранная на пакетной базе релиза **Jammy Jellyfish 22.04 LTS**. Сборка имеет базовый набор пользовательского ПО с возможностью установки на жёсткий диск.  
<!--more-->  
  
 **Основные элементы системы:**  
  
Менеджер дисплея LightDM 1.30  
Оконный менеджер Openbox 3.6.1  
Файловый менеджер PCManFM 1.3.2  
Панель рабочего стола LXPanel 0.10.1  
Менеджер сети NetworkManager 1.36.4 (pptp, l2tp, ssh, openvpn и vpnc)  
Текстовый редактор Geany 1.38  
Браузер Firefox 99.0.1  
Видеоплеер VLC 3.0.16  
Аудиоплеер DeaDBeeF 1.8.8  
  
  
Менеджер питания xfce4-power-manager  
Менеджер Bluetooth Blueman  
Звуковой сервер PulseAudio  
  
Версия ядра: 5.15.0-25-generic  
Версия Xorg: 2:21.1.3  
   
  
 **Минимальные системные требования:**  
  
RAM - 1024Mb  
CPU - x64  
HDD - 5Gb  
  
Логин: runtu  
Пароль: пустой  
  
 **Скриншоты рабочего окружения:**  
  
===========================  
  
[![](https://i.ibb.co/c1b4Czk/LITE-22-04-1.png)](https://ibb.co/c1b4Czk) [![](https://i.ibb.co/jkPdpQ5/LITE-22-04-2.png)](https://ibb.co/jkPdpQ5) [![](https://i.ibb.co/CzVXmTT/LITE-22-04-3.png)](https://ibb.co/CzVXmTT)  
  
[![](https://i.ibb.co/ZXJ73sZ/LITE-22-04-4.png)](https://ibb.co/ZXJ73sZ) [![](https://i.ibb.co/y0RGbVV/LITE-22-04-5.png)](https://ibb.co/y0RGbVV) [![](https://i.ibb.co/H2v8TVb/LITE-22-04-4png.png)](https://ibb.co/H2v8TVb)   
  
===========================  
  
 **Служебные комментарии:**  
  
\- заблокирована возможность установки snap-приложений на уровне приоритетов APT. При необходимости поддержки данного типа пакетов нужно удалить конфиг /etc/apt/preferences.d/nosnap.pref и обновить индекс пакетной базы;  
  
\- браузер **Firefox** установлен в виде deb-пакета из подключенного [PPA-репозитория Mozillateam](https://launchpad.net/\~mozillateam/+archive/ubuntu/ppa), т.к. штатно в релизе 22.04 **Firefox** поставляется в виде **snap**. Предустановлено расширение **uBlock Origin**.  
  
  
В меню "Офис" добавлены ярлыки для установки **LibreOffice** и подсистемы печати. Если установка данного ПО не планируется и ярлыки в меню не нужны, следует удалить файлы _printinstall_ и _lo_install_ в каталоге /var/lib/misc/.  
  
  
 **Ссылки на загрузку:**  
  
Загрузить с [Sourceforge.net](https://sourceforge.net/projects/runtu/files/runtu%2022.04/LITE/runtu-lite-22.04-amd64_20220424.iso/download)  
Загрузить с [Зеркала на mephi.ru](http://mirror.mephi.ru/runtu/runtu%2022.04/LITE/runtu-lite-22.04-amd64_20220424.iso)  
  
**Файл:** runtu-lite-22.04-amd64_20220424.iso  
  
**Размер:** 1151 Мб  
  
  
**md5:** 889295457f02cd9c3d9c25498a0d0475  
**sha1:** 0be5c2d87ba85b0c5a00c3a762cd1a89b5e35cfd   
  
  
**Поддержать проект:** [ссылка на тему форума](http://forum.runtu.org/index.php/topic,188.0.html).