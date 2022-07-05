<template>
    <div class="description mb-2">
          <div class="desc-icon">
              <i class='bx-fw bx bxs-chevron-right' :class="{expand: isClicked}"></i>
          </div>
          <div class="text">
              <h5 class="description-title text-white mb-2" :class="{expand: isClicked}" @click="expandDesc">
                  About {{ gameName }}
              </h5>
              <Transition name="fade">
                  <div class="desc-wrapper" v-if="isClicked">
                      <p class="desc">
                          {{ desc }}
                      </p>
                  </div>
              </Transition>
          </div>
    </div>
</template>

<script>
export default {
    name: 'GameDescription',
    data() {
        return {
            isClicked: false,
        }
    },
    methods: {
        expandDesc () {
            if(!this.isClicked) {
                this.isClicked = true;
            } else {
                this.isClicked = false;
            }
        }
    },
    props: [
        'desc',
        'gameName'
    ]
}
</script>

<style>
.description {
    display: flex;
    align-items: flex-start;
}

.description-title {
    cursor: pointer;
}

.desc-title {
    display: flex;
    align-items: flex-start;
}

.desc-icon {
    transform: translateY(2px);
}

.desc-icon i {
    transition: 0.25s ease-in-out;
}

.desc-icon i.expand {
    transform: translateY(3px) rotate(90deg);
}

.desc-wrapper {
    width: 100%;
}

.fade-enter-active {
    animation: fadeIn 0.5s ease-in-out;
}

.fade-leave-active {
    animation: fadeOut 0.2s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>