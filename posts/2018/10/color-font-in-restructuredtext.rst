.. title: Как раскрасить текст в reStructuredText
.. date: 2018-10-23 10:18:00 UTC+03:00
.. tags: hint, reStructuredText
.. category: everything
.. description: Раскраска текста в reStructuredText
.. type: text


.. role:: red
.. role:: green
.. role:: blue

.. raw:: html

    <style>
     .red {color:red; font-weight: bold}
     .green {color:green; font-weight: bold}
     .blue {color:blue; font-weight: bold}
    </style>


Пришлось мне тут документацию к одному проекту делать.

Сначала решил делать локально, просто как набор документов на языке разметки Markdown_,
но он немного меня разочаровал (нельзя делать сложные таблицы, раскрашивать текст и др.).

Значит решено, будем делать документацию в ReadTheDocs_, а значить язык разметки теперь будет ``reStructuredText``.
Таблицы тут можно делать несколькими `способами`_: разметкой, немного напоминающией ``Markdown`` и директивами "**csv-table**", "**list-table**"

.. _ReadTheDocs: https://readthedocs.org/
.. _Markdown: https://ru.wikipedia.org/wiki/Markdown
.. _способами: http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html#tables

Но и здесь я столкнулся с проблемой раскраски текста. Теперь, после пары часов гугла, я использую такой вариант

.. TEASER_END

(без создания или редактирования внешних ``css`` файлов, всё в одном документе ``.rst``):


В начале документы прописываем директивы ``role``:

.. code-block::

    .. role:: red
    .. role:: green
    .. role:: blue

Далее директивой ``raw`` вставляем в html файл, который будет генерится кусок кода со стилями:

.. code-block::

    .. raw:: html

        <style>
         .red {color:red; font-weight: bold}
         .green {color:green; font-weight: bold}
         .blue {color:blue; font-weight: bold}
        </style>

Я ещё добавил и жирное начертание. Стили можно использовать на свой вкус :)

И теперь в любом месте можно использовать любой стиль:

.. code-block::

    Выглядит это так: :red:`красный`,  :green:`зеленый`, :blue:`синий`.

Выглядит это так: :red:`красный`,  :green:`зеленый`, :blue:`синий`.

.. important::
    Практика показала, что такой метод работает для для раскрашивания текста в ячейках таблиц, построенных с помощью "**list-table**", но не работает с "**csv-table**"


Итого, весь файл .rst

.. code-block::

    .. role:: red
    .. role:: green
    .. role:: blue

    .. raw:: html

        <style>
         .red {color:red; font-weight: bold}
         .green {color:green; font-weight: bold}
         .blue {color:blue; font-weight: bold}
        </style>

    Выглядит это так: :red:`красный`,  :green:`зеленый`, :blue:`синий`.