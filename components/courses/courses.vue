<template>
    <div class="courses">
        <div class="topbar">
            <!-- HEADING + AVATAR -->
            <dashHeader :user="user">
                <template #heading>
                    My Courses 
                </template>
            </dashHeader>
        </div>
        
        <RouterView/>
       
    </div>
</template>

<script>

    export default {
        name: 'courseSection',

        computed: {
            user() {
                return JSON.parse(localStorage.getItem('UserDetails'))
            }
        },
        
        methods: {

        },
        
        mounted() {
         
        },
    }
</script>
