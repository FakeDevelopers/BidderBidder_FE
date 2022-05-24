import axios from 'axios'

async function fetchList(listNum,pageNum) {
    try {
        return await axios.get('/board/getPageProductList',{
            params: {
                listCount: listNum,
                page: pageNum
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export { fetchList }
