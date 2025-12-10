import axios from 'axios'

export const apiClient = axios.create({
    baseURL: '/api',
    withCredentials: true, // HttpOnly Cookie 送信
    headers: {
        'Content-Type': 'application/json',
    },
})

// レスポンスインターセプター（エラーハンドリング用）
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // 401 Unauthorized の場合はログインページへリダイレクト等
        if (error.response?.status === 401) {
            // TODO: 認証エラー処理
        }
        return Promise.reject(error)
    }
)