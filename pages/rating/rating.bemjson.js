({
    block: 'b-page',
    title: 'Верстка. Задание 1. Рейтинг',
    head: [
        { elem: 'css', url: 'rating.css' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'rating.js' }
    ],
    content: [
        {
            block: 'b-text',
            elem: 'h3',
            content: 'Рейтинг в строке'
        },
        {
            block: 'b-text',
            content: [
               'Двенадцать на три — ',
                {
                    block: 'b-rating',
                    mods: {
                        length: 6
                    },
                    value: 4
                },
                ' — это четыре'
            ]
        },
        {
            block: 'b-text',
            elem: 'h3',
            content: 'Дробный рейтинг'
        },
        {
            block: 'b-text',
            content: [
               'Семьдесят пять тридцатых равно двум с половиной ',
                {
                    block: 'b-rating',
                    mods: {
                        length: 5
                    },
                    value: 2.5
                }
            ]
        },
        {
            block: 'b-text',
            elem: 'h3',
            content: 'Пользовательский стиль'
        },
        {
            block: 'b-text',
            content: [
               'Заряд вашей батареи подходит к концу ',
                {
                    block: 'b-rating',
                    mods: {
                        style: 'bars',
                        length: 10
                    },
                    value: 1.7
                },
                '17%'
            ]
        },
        {
            block: 'b-text',
            elem: 'h3',
            content: 'Блочный рейтинг'
        },
        {
            block: 'b-fake',
            content: [
                { elem: 'logo' },
                {
                    block: 'b-rating',
                    mods: {
                        style: 'bars',
                        length: 8
                    },
                    value: 4.3
                },
                '4.3'
            ]
        },
        {
            block: 'b-text',
            elem: 'h3',
            content: 'Скрипты'
        },
        {
            block: 'b-text',
            content: [
               'Пока вы читали, рейтинг накрутился ',
                {
                    block: 'b-rating',
                    mods: {
                        length: 5
                    },
                    value: 1,
                    js: {
                        url: '../../blocks/b-rating/example/value'
                    }
                }
            ]
        },
        {
            block: 'b-text',
            content: [
               'Пока вы читали, рейтинг накрутился ',
                {
                    block: 'b-rating',
                    mods: {
                        length: 5
                    },
                    value: 1,
                    js: {
                        url1: '/blocks/b-rating/example/value'
                    }
                }
            ]
        }

    ]
})
