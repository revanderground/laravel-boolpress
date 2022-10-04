<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Laravel Boolpress</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto w-100">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" >
                            Home
                        </router-link>

                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link" >
                            About
                        </router-link>
                   </li>

                    <li class="nav-item">
                        <router-link to="/contacts" class="nav-link" >
                            Contacts
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/posts/4" class="nav-link" >
                            Post-2
                        </router-link>
                    </li>

                    <li class="nav-item ml-auto mx-3">
                        <a href="/admin/" class="nav-link" >
                            Admin panel
                        </a>
                    </li>

                </ul>
                        <input class="form-control col-2 mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

            </div>
        </nav>
    </header>
</template>

<script>
export default {
    // main: Header,
}
</script>

<style>

</style>
