
const api = {
    addForm3(todo){
        console.log('Api : Calling Service')
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('API : Service call done')
                resolve(true)
            }, 1000)
        })
    },
}

export default api