export default {
    read() {
        return JSON.parse(localStorage.getItem('blog')||'[]')
    },
    save(blog) {
        localStorage.setItem('blog', JSON.stringify(blog));
    }
}