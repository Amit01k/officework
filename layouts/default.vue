<template>
    <div>
        <div class=" ">
            <!-- <p class="text-end mx-4">home</p>
        <p class="text-right">product</p> -->
            <nav class="flex justify-center space-x-4">
                <nuxt-link to="product"
                    class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                    product</nuxt-link>
                <a href="/product"
                    class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">product</a>
                <a href="/team"
                    class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
                <a href="/projects"
                    class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
                <a href="/reports"
                    class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
            </nav>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
        <slot />

    </div>

</template>