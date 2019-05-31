export const addElement = function(text: string) {
    let elem: HTMLElement = document.createElement('div')
    elem.innerHTML = text
    document.getElementById("content").appendChild(elem)
}