import {
    dictionary,
    locale,
    _
} from 'svelte-i18n';
function setupI18n({withLocale: _locale} = {withLocale: 'en'}) {
    dictionary.set({
        en: {
            "title": "Yet Another Randomizer",
            "sourceCode": "Source Code",
            "numberRandomizerTabName": "Number Randomizer",
            "numberRandomizer": "Number Randomizer",
            "minMaxInterval": "Generates a random integer number from the [min, max] interval",
            "minValue": "Min Value",
            "maxValue": "Max Value",
            "pushYourLuckButton": "Push Your Luck!",
            "setResult": "Result:",
            "resetButton": "Reset",
            "emptyRandomNumber": "(?)",
            "linesRandomizerTabName": "Lines Randomizer",
            "linesRandomizer": "Lines Randomizer",
            "linesNames": "Returns a random line from the list of lines",
            "linesSpace": "New Line",
            "addLineButton": "Add Line",
            "newLines": "Lines",
            "cleanLinesButton": "Clean",
            "emptyRandomLine": "(?)",
            "developerName": "Created by Dmitry Belov",
            "localizerName": "Translated by Elena Petrova"
        },
        ru: {
            "title": "Yet Another Randomizer",
            "sourceCode": "Source Code",
            "numberRandomizerTabName": "Рандомайзер чисел",
            "numberRandomizer": "Рандомайзер чисел",
            "minMaxInterval": "Случайное целое число из [min, max] интервала",
            "minValue": "Min значение",
            "maxValue": "Max значение",
            "pushYourLuckButton": "Испытай удачу!",
            "setResult": "Результат:",
            "resetButton": "Сбросить",
            "emptyRandomNumber": "(?)",
            "developerName": "Автор: Дмитрий Белов",
            "localizerName": "Перевод: Елена Петрова",
            "linesRandomizerTabName": "Рандомайзер строк",
            "linesRandomizer": "Рандомайзер строк",
            "linesNames": "Случайная строка из списка",
            "linesSpace": "Новая строка",
            "addLineButton": "Добавить строку",
            "newLines": "Строки",
            "cleanLinesButton": "Очистить",
            "emptyRandomLine": "(?)"
        },
        de: {
            "title": "Yet Another Randomizer",
            "sourceCode": "Source Code",
            "numberRandomizerTabName": "Der Zahlenzufallsgenerator",
            "numberRandomizer": "Der Zahlenzufallsgenerator",
            "minMaxInterval": "Generiert eine zufällige ganzzahlige Zahl aus dem Intervall [min, max]",
            "minValue": "Min Wert",
            "maxValue": "Max Wert",
            "pushYourLuckButton": "Fordere Dein Glück heraus!",
            "setResult": "Das Ergebnis:",
            "resetButton": "Zurücksetzen",
            "emptyRandomNumber": "(?)",
            "developerName": "Erstellt von Dmitry Belov",
            "localizerName": "Übersetzt von Elena Petrova",
            "linesRandomizerTabName": "Der Linienzufallsgenerator",
            "linesRandomizer": "Der Linienzufallsgenerator",
            "linesNames": "Erzeugt eine zufällige Linie aus der Liste den Linien",
            "linesSpace": "Neue Linie",
            "addLineButton": "Linie hinzufügen",
            "newLines": "Linien",
            "cleanLinesButton": "Reinigen",
            "emptyRandomLine": "(?)"
        }
    });
    locale.set(_locale);
}
export {
    _,
    setupI18n
};