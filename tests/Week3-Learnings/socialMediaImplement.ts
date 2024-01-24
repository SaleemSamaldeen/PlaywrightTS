import { SocialMediaFeature } from "./socialMediaFeature";
import { UIComponent } from "./uiComponent";

class Post implements SocialMediaFeature, UIComponent {

    sharePost(): void {
        console.log('Share post');
    }
    render(): void {
        console.log('render');
    }
    handleEvent(): void {
        console.log('handle event');
    }

}

class Comment implements SocialMediaFeature, UIComponent {
    
    sharePost(): void {
        console.log('Share post');
    }
    render(): void {
        console.log('render');
    }
    handleEvent(): void {
        console.log('handle event');
    }

}

class Like implements SocialMediaFeature, UIComponent {

    sharePost(): void {
        console.log('Share post');
    }
    render(): void {
        console.log('render');
    }
    handleEvent(): void {
        console.log('handle event');
    }
}

const post = new Post();
const comment = new Comment();
const like = new Like();

post.sharePost();
comment.handleEvent();
like.sharePost();