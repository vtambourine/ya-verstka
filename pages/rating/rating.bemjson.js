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
            content: [
               'Семьдесят пять тридцатых',
                {
                    block: 'b-rating',
                    mods: {
                        style: 'stars',
                        length: 5
                    },
                    value: 2.5
                },
                'два с половиной'
            ]
        },
        {
            block: 'b-text',
            content: [
               'Фильм «Хороший, плохой, злой»',
                {
                    block: 'b-rating',
                    mods: {
                        style: 'stars',
                        length: 10
                    },
                    value: 8.9
                },
                '8,9 / 10'
            ]
        },
        {
            block: 'b-text',
            content: [
               'Видео Мишанги на кипрской катапульте',
                {
                    block: 'b-rating',
                    mods: {
                        style: 'stars',
                        length: 146
                    },
                    value: 78
                },
                '78 / 146'
            ]
        },
        {
            block: 'b-text',
            content: [
               'Hello, stars! ',
               'One, two, ',
                {
                    block: 'b-rating',
                    mods: {
                        style: 'stars',
                        length: 3
                    },
                    value: 3
                },
                ', four, five'
            ]
        }

    ]
})