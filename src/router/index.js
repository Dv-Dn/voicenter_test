import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import User from "@/pages/User.vue";
import Post from "@/pages/Post.vue";
import NotFound from "@/pages/404.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		props: (route) => ({ query: route.query.message }),
	},
	{
		path: "/login/:message?",
		props: true,
		name: "Login",
		component: Login,
	},
	{
		path: "/user/:id",
		props: true,
		name: "User",
		component: User,
	},
	{
		path: "/post/:id",
		props: true,
		name: "Post",
		component: Post,
	},
	{
		path: "/404",
		name: "404",
		component: NotFound,
	},
	{
		path: "*",
		redirect: "/404",
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
