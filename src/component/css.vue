<template>
    <div>
        <textarea v-model="input"></textarea>

        <div class="section">
            <span class="btn" v-on:click="compress">压缩</span>
            <span class="btn" v-on:click="pretty">格式化</span>
            <span class="btn btn-cancel" v-on:click="empty">清空</span>
        </div>
    </div>
</template>

<script>
const { clipboard } = require('electron')
const CleanCSS = _require('clean-css')
const beautifyCSS = _require('js-beautify').css

export default {
    data: function() {
        return {
            input: ''
        }
    },
    methods: {
        compress: function() {
            let input = this.input.trim()
            if (!input) {
                return
            }

            try {
                this.input = new CleanCSS({
                    // 禁用选择器跟属性合并等高级功能，只做最纯粹的压缩
                    advanced: false,
                    aggressiveMerging: false
                }).minify(input).styles
                toastr.success(g_config.copySuccessMsg)
            } catch (e) {
                toastr.error(e.toString())
            }
        },
        pretty: function() {
            let input = this.input.trim()
            if (!input) {
                return
            }

            try {
                this.input = beautifyCSS(input)
                toastr.success(g_config.copySuccessMsg)
            } catch (e) {
                toastr.error(e.toString())
            }
        },

        empty: function() {
            this.input = ''
        }
    }
}
</script>

<style>
</style>