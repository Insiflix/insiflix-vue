<template>
    <div>
        <NavBar></NavBar>
        <main>
            <div class="outer-wrapper">
                <div class="wrapper">
                    <div class="inner-wrapper">
                        <div class="flex-wrapper">
                            <div class="inner-flex">
                                <img class="logoleinchen" src="../img/insiarsch.png" alt="">
                                <CustomSelect></CustomSelect>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import CustomSelect from "../components/CustomSelect.vue";
import NavBar from "../components/NavBar.vue";
export default {
    components: {
        NavBar,
        CustomSelect,
    }
}
</script>

<style lang="scss" scoped>
.inner-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.logoleinchen {
    width: 5rem;
    padding: 2rem;
}
.flex-wrapper {
    display: flex;
    align-items: start;
    flex-direction: column;
    position: relative;

}
.outer-wrapper {
    margin: 4rem;
}
.wrapper {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
}
.inner-wrapper {
    position: relative;
    min-width: 30rem;
    width: 100%;
    height: 500px;
    background: linear-gradient(145deg, #1b1b1b, #323233);
box-shadow:  20px 20px 60px #111111,
             -20px -20px 60px #171717;
    border-radius: .75rem;
}
</style>