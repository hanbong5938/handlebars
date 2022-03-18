const loadTemplate = async (name, targetName, replace = false) => {
    const element = json[name]
    const {data} = await axios.get(element.url)
    const template = Handlebars.compile(data)
    const target = $("#" + targetName)
    const compile = template(element.data);
    replace ? target.html(compile) : target.append(compile)
    addClickEvent(element.data.id, element.func)
}
