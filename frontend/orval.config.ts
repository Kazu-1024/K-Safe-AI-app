import { defineConfig } from 'orval'

export default defineConfig({
    potaslab: {
        input: '../swagger.yaml',
        output: {
            mode: 'tags-split',
            target: './src/api/generated',
            client: 'react-query',
            httpClient: 'axios',
            override: {
                mutator: {
                    path: './src/api/axios.ts',
                    name: 'apiClient',
                },
            },
        },
    },
})