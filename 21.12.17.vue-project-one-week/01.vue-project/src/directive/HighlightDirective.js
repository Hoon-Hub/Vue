export const MyHighlightDirective = {
    beforeMount(el){
        el.style.background = 'yellow'
    }
}

export const MyFocus = {
    mounted(el) {
        el.focus()
    }
}