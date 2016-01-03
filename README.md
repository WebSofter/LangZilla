# LangZilla
Free translate plugin by WebSofter.You can use and modify the our plugin for both personal and commercial use. You must keep
all copyright information and credit links in the template and associated files.

Each site developer had to deal with the localization of the site to each user when it comes to the page site automatically redirects it to the version of the language that was used to communicate the client. There are many ways this do:
You can make a copy of the site in different folders and www.domen.com/ru www.domen.com/en etc .;
You can use the api interpreter by Google Translate;
You can use JavaScript code and determine their own country and language with the help of the properties window.navigator.languages on JavaScript;
Finally, you can use a ready and rapid decision -LangZilla.
Description

LangZilla - is a free JavaScript autotranslator sites, with the possibility to expand the language base by means of language files. What can LangZilla? Here are its features:
automatically identify the country of the client and gives him his translation;
can define any language using the json - file;
can translate in HTML tags;
can translate words in tag attributes;
may transfer part of the text inside the tag to the content;
can transfer the contents of the text after the tag;
can run custom code that define the callback function;
able to use the translation tags HTML;
the ability to define their own way to transfer maps and identify them icons.
Using

To quickly use the plugin, you should download the archive, in the src folder will be all source files plugin:
loc folder contains all the translation files that you want to add. Moreover, the file name must match the language code;
images folder contains resources plugin, such as the icons of languages, etc .;
file langzilla.js - the main plug-in file, you need to connect to our page where you want to transfer.
So, let's detail. After unzipping the root folder of the site include files and jQuery langzilla.js to the page on which you want to transfer 

<script src="js/jquery-2.1.4.min.js"></script>
<script src="src/langzilla.js"></script>

Next we need to create a language card format .json and move them to a folder loc, where they will read our plug-in translation. 
Name Card tongue must match the definition of the code language in a format that is defined for the property 
window.navigator.languages, the format language for browsers operedelit standardRFC 4646. Examples of valid language codes 
include "en", "EN-US", "FR", "es-ES", "ru-RU", etc. Some can be seenhere. After linguistic map created and gave him the name of 
a valid corresponding to the code name of the language, we need to write code to start to register the language cards.

More information on page http://www.websofter.ru/products/langzilla/doc-en.html
