
<template>
    <p>Aqui vai alguns de nossos momentos, eu não escolhi todas as fotos se não ficaria algo gigante kakakakka, mas peguei algumas em cada momento especifico, em cada momento especial e único nosso.</p> 
    <div class="card">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 700px"
            :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%;" />
            </template>
        </Galleria>
    </div>
    <p>Bom meu amor, eu espero que você tenha gostado, fiz de coração, demorou um pouco pra fazer, dei o meu melhor em tudo, espero que vc ame e aproveite bem muito tudo isso minha princesa linda maravilhosa perfeita da minha vida.</p>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
</script>
<style scoped>
*{
    font-family: "Madimi One", sans-serif;
}
    p{
        color:  rgb(159, 94, 197);
        text-align: center;
        font-size: 1.4em;
        margin-top: 30px;
    }
    .card{
        margin-top: 100px;
        border-radius: 8px;
        display: flex;
        margin-left: 60vh;
        margin-bottom: 100px;
    }
    img{
        max-width: 600px;
        max-height: 550px;
    }
</style>
