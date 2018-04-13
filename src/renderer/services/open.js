export default {

  getUrl (text) {
    return text.substring(text.indexOf('open ') + 5, text.length)
  }

}
