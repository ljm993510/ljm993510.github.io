require.config({
    paths: {
        jquery: './src/jquery',
        jqueryUI: './src/jquery-ui.min',
        dialog: './util/dialog',
    },
    shim: {
        jqueryUI: ['jquery']
    }
})

require(['jquery', 'jqueryUI', 'dialog', ], function($, $UI, d) {
    $('#btn').on('click', function() {

        new d.Dialog().alert({
            title: '自己设置的标题',
            con: '如果不配置相应参数，则会使用dialog.prototype里面设置的默认属性的值',
            width: 500,
            height: 400,
            y: 100,
            hasCloseBtn: true,
            skinThemeName: 'theme_a',
            btnTxt: 'ok',
            hasMask: true,
            dragHandle: '.head'
        })

    })
})