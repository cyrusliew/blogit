export const getData = (filters) => {
    const data = localStorage.getItem('blogItData');
    const jsonData = data ? JSON.parse(data) : [];

    if (filters && jsonData.length > 0) {
        const {
            search,
            contentType,
        } = filters;

        const filteredData = jsonData.filter(({
            title,
            name,
            contentType: dataContentType,
        }) => (
            search ? (title || name).includes(search) : true
            && (contentType ? dataContentType === contentType : true)
        ));

        return filteredData;
    }

    return jsonData;
}

export const saveData = (data) => {
    localStorage.setItem('blogItData', JSON.stringify(data));
}

export const deleteData = (selectedId) => {
    const data = getData();
    const filteredData = data.filter(({ id }) => parseInt(id) !== parseInt(selectedId));
    saveData(filteredData);
}

export const icons = {
    movie: 'film',
    blog: 'file-alt',
    recipe: 'utensils',
};
 