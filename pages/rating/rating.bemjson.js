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
                '2,5'
            ]
        },
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
                    value: 2.2
                },
                '2,2'
            ]
        },,
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
                    value: 2.9
                },
                '2,9'
            ]
        },
        {
            block: 'b-text',
            content: [
               'Фильм «Хороший, плохой, злой»',
                {
                    block: 'b-rating',
                    mods: {
                        style: 'bars',
                        length: 10
                    },
                    value: 8.25
                },
                '8,25 / 10'
            ]
        },
        {
            block: 'b-text',
            content: [
               'Фильм «Хороший, плохой, злой»',
                {
                    block: 'b-rating',
                    mods: {
                        style: 'bars',
                        length: 10
                    },
                    value: 8.57
                },
                '8,57 / 10'
            ]
        },
        {
            block: 'b-text',
            content: [
               'Фильм «Хороший, плохой, злой»',
                {
                    block: 'b-rating',
                    mods: {
                        style: 'bars',
                        length: 10
                    },
                    value: 8.79
                },
                '8,79 / 10'
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