<template>
    <div class="models">
        <p class="models-h"> Մեր <span> տեսականին </span> </p>
        <div class="models-block">
            <div class="models-block-inf">
                <div class="models-block-inf-b">
                     <p>Թերմո<span>Պայուսակներ</span> </p>
                    <div
                    v-for = "index in 4"
                    :key="index">
                        <span> {{state.title}}</span>
                        <span>{{state.des}} </span>
                        <span> {{state.price}}</span>
                    </div>
                </div>
            </div>
            <div class="models-block-img">
                <img src="../assets/img/image7.png"/>
            </div>
        </div>
        <div class="models-block-btm">

             <div class="models-block-btm-img">
                <img src="../assets/img/image8.png"/>
            </div>

            <div class="models-block-btm-inf">
                <div class="models-block-btm-inf-b">
                     <p>Թերմո<span>Տոպրակ</span></p>
                <div
                v-for = "index in 4"
                :key="index">
                    <span> {{state.title}}</span>
                    <span>{{state.des}} </span>
                    <span> {{state.price}}</span>
                </div>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
    export default {
        name:"typesDetail",

        data() {
            return {
                state: {
                    title: "Թերմո պայուսակ",
                    des: "40x24x20 սմ",
                    price: "4900 Դր."
                    }
                };
        },
        
    }
</script>