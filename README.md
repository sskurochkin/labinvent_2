# Установка и запуск сервера и приложения

**1. В папке с сервером и проектом выполнить:**

### `npm install`

**2. После установки всех пакетов, выполнить**

### `npm run start`


приложение будет запущено и доступно по адресу [http://localhost:3000](http://localhost:3000) (по умолчанию)
#

><small>Примечания по заданию: <br>
 >1 часть:<br>
 \- верстка выполнена под разрешение 1920*1080рх без адаптива, поэтому изменение размеров окна браузера будем приводить к искажениям<br>
 \- использование svg-иконок выполнено не в полном объеме (не удалось отобразить пустую бутылку) <br>
 2 часть:<br>
 \- сервер не мог выполнять cors-запросы, поэтому в его настройки были внесены изменния в файл **main.ts** 6 строка<br> `const app = await NestFactory.create(AppModule, { cors: true })`<br>
 \- для редактирования доступны только вновь создаваемые строки таблицы; поля в разделе **Control mode** для редактировния недоступны (в задании явно указано не было)<br>
 </small>
 
 Чистого времени на выполнение всех задач было потрачено около 35 часов:<br> 10 часов на выполнение первой части и 25 часов - второй