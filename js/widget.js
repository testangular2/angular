/**
 * Created by AlexanderRylov on 2/12/2016.
 */
jQuery.widget('el.widgetfiles', {
    _init: function () {
        var self = this;
        jQuery.getJSON("/angkurses/initial/files.json", function (data) {
            var files = [];
            jQuery.each(data, function (key, val) {
                files.push(val);
            });
            var html = '<div id="filelist">';

            for (var i = 0; i < files.length; i++) {
                html += '<label><input type="checkbox" value="' + files[i] + '"> ' + files[i] + '</label><br />';
            }
            html += '</div>';
            self.element.before(html);
            jQuery("body").on("change", "#filelist input[type='checkbox']", function () {
                var selected_files = [];
                jQuery("#filelist input[type='checkbox']").each(function () {
                    if (jQuery(this).is(":checked")) {
                        selected_files.push(jQuery(this).val());
                    }
                });
                self.options.onValueChanged(selected_files);
            });
        });
    },

    getOption: function (key) {
        return this.options.key;
    },

    setOption: function (key, value) {
        this.options.key = value;
    },
});