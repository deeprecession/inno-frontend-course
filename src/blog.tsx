<!doctype html>
<html lang="en">

<head>
    <title>Blog</title>
    <link href="./style.css" rel="stylesheet" />
    <script src="./bundle.js"></script>
</head>

<body>
    <div id="blog-author">Vladislav Kishkovskiy</div>

    <div id="info">
        <div id="contacts">
            <a id="gh-link" class="link-img" href="https://github.com/deeprecession/">
                <img src="github-mark.svg" alt="GitHub svg" />
                <div>GitHub</div>
            </a>

            <span class="separator">|</span>

            <a id="tg-link" class="link-img" href="https://t.me/deeprecession">
                <img src="telegram-mark.svg" alt="telegram svg" />
                <span>Telegram</span>
            </a>

            <span class="separator">|</span>

            <a id="email" class="link-img" href="mailto:v.kishkovskiy@innopolis.university">
                <img src="email-mark.svg" alt="mail svg" />
                <span>Email</span>
            </a>
        </div>

        <div id="navigation">
            <a href="index.html">About</a>
            <span class="separator">|</span>
            <a href="blog.html">Blog</a>
            <span class="separator">|</span>
            <a href="comic.html">Comic</a>
        </div>
    </div>

    <div id="blog">
        <div id="blog-posts-container">
            <div class="blog-post">
                <div class="blog-post-title">lorem</div>

                <div class="blog-post-content">
                    lobortis lectus, et sodales urna. Praesent eu vulputate nibh, ut
                    iaculis velit. Morbi id quam nec enim posuere consequat laoreet
                    molestie est. Quisque vel porttitor purus, in aliquet augue.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Mauris sodales, magna id interdum
                    tristique, est odio placerat mi, ut venenatis dolor nulla eu felis.
                    Donec placerat consequat lorem vitae aliquet. Maecenas pretium,
                    felis sit amet consequat imperdiet, nisi justo ultricies leo, vitae
                    venenatis tortor ipsum ut leo. Cras id nisl velit. Vivamus aliquet
                    nulla vel libero hendrerit pulvinar. Morbi dapibus, sapien vel
                    faucibus ultrices, enim magna efficitur dui, a convallis leo ex ac
                    tellus. Sed maximus porttitor lobortis. Phasellus vehicula, neque a
                    tempus pretium, ligula elit facilisis ipsum, at elementum nisi
                    tellus ac enim. Curabitur convallis eu nunc sit amet placerat.
                    Integer pharetra hendrerit urna, in accumsan eros suscipit nec.
                </div>
            </div>
        </div>

        <form id="blog-form">
            <label>Title</label>
            <input type="text" id="blog-title" />

            <label>Content</label>
            <textarea id="blog-content" name="blog-content"></textarea>

            <button id="blog-create-btn" type="button">Create Post</button>
        </form>
    </div>
</body>

</html>
