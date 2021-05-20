<template>
    <table>
        <tr class="head">
            <th>Srautas</th>
            <th>Grupė</th>
            <th>Moksleivių skaičius</th>
            <th>Veiksmai</th>
        </tr>
        <tr v-for="stream in streams" :key="stream.id" class="row">
            <td>{{ stream.name }}</td>
            <td>{{ stream.group }}</td>
            <td>{{ stream.students }}</td>
            <td>
                <a class="mrjg_button light yellow">Daugiau informacijos</a>&nbsp;&nbsp;
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    name: 'StreamsTable',
    data() {
        return {
            "streams": [
                {
                    "id": 1,
                    "name": "srautas-1",
                    "group": 3,
                    "students": 30,
                },
                {
                    "id": 2,
                    "name": "srautas-2",
                    "group": 3,
                    "students": 27,
                },
                {
                    "id": 3,
                    "name": "srautas-3",
                    "group": 4,
                    "students": 25,
                },
                {
                    "id": 4,
                    "name": "srautas-4",
                    "group": 4,
                    "students": 31,
                },
            ]
        }
    }
}
</script>