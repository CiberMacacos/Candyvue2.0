<script>
import getRandomProduct from './modules/getRandomProduct.js'
export default{
name: "Recommended",
data() {
    
},
methods: {
    
}
}
</script>
<template>

    <div v-for="arrayCosas" class="flex flex-col md:flex-col lg:flex-row lg:gap-9 md:gap-3 gap-3 md:w-48 md:h-48 lg:w-full lg:h-72">
        <div class="flex flex-row md:flex-col lg:flex-col gap-2 items-center border-1 lg:text-center border-gray-100 rounded-lg shadow-lg lg:shadow-xl lg:w-60 lg:h-72 lg:hover:scale-110 md:hover:scale-110 md:hover:ease-linear duration-150 ease-in">
            <img class="w-20 h-20 md:w-full lg:w-full md:h-full lg:h-48 rounded-l-lg md:rounded-t-lg md:rounded-bl-none lg:rounded-t-lg lg:rounded-bl-none" src="" alt="">
                <div class="flex flex-col lg:p-4 gap-2">
                    <h1><a class="font-bold text-left p-3" href=""></a></h1>
                    <h3 class="font-semibold"></h3>
                </div>
        </div>
    </div>
    
</template>