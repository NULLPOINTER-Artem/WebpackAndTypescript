import { JsonPost, JsonComment } from './interfaces';
import './style.css';

const url: string = 'https://jsonplaceholder.typicode.com/';
const postsCntr: HTMLDivElement = document.querySelector('.posts');

const requestBtn: HTMLButtonElement = document.querySelector("#request");
const idInput: HTMLInputElement = document.querySelector('#id');

requestBtn.addEventListener('click', main);

async function main(): Promise<any> {
    const id: number = Number.parseInt(idInput.value);

    if (!isNaN(id)) {
        try {
            const resPosts = await fetch(`${url}posts/${id}`);
            const fetchedPost = await resPosts.json();
            const resComments = await fetch(`${url}posts/${id}/comments`);
            const comments = await resComments.json();

            createPostWithComments(fetchedPost, comments);
        } catch (error: any) {
            console.log(new Error(error));
        }
    }
}

function createPostWithComments(post: JsonPost, comments: Array<JsonComment>): void {
    let { title, body } = post;
    let titleElem = document.createElement('h4');
    let bodyElem = document.createElement('p');
    let commentElem = document.createElement('p');
    const divOfComments = document.createElement('div');

    titleElem.textContent = title;
    bodyElem.textContent = body;

    titleElem.style.borderBottom = '2px solid red';
    titleElem.style.textAlign = 'center';

    postsCntr.append(titleElem);
    titleElem.after(bodyElem);

    if (comments.length != 0) {
        commentElem.textContent = "Comments:";

        for (let { email, body } of comments) {
            let comment = document.createElement('p');
            comment.innerHTML = email + "</br>" + body;
            comment.style.marginTop = '5px';
            divOfComments.append(comment);
        }

        bodyElem.after(divOfComments);
        bodyElem.after(commentElem);
        divOfComments.style.marginBottom = '10px';
        divOfComments.style.marginLeft = '10px'
        commentElem.style.marginTop = '10px';
    }
}