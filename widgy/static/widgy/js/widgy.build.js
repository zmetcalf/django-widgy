({
    paths: {
        'jquery': './lib/jquery',
        'underscore': './lib/underscore',
        'backbone': './lib/backbone',
        'text': 'require/text',
    },
    skipDirOptimize: true,
    modules: [
        {
            name: 'widgy-main',
            include: [
                'widgy.contents',
                'components/widget/component',
                'components/tabbed/component',
                'components/table/component',
                'components/tableheader/component',
            ],
        }
    ],
})
