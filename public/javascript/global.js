const loadTemplate = async (name, targetName, replace = false) => {
    const element = json[name]
    const {data} = await axios.get(element.url)
    const template = Handlebars.compile(data)
    const target = document.getElementById(targetName)
    const compile = template(element.data);
    replace ? target.innerHTML = compile : target.innerHTML += compile
    globalClick(name)
}
