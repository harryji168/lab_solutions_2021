const BASE_URL = "http://localhost:3000/api/v1";
const Session = {
    create(params) {
        return fetch(`${BASE_URL}/session`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
};

Session.create({
    email: "admin@user.com",
    password: "123"
}).then(data => {
    console.log(data)
});
const Product = {
    all() {
        return fetch(`${BASE_URL}/products`, {
            credentials: "include"
        }).then(res => res.json());
    },
    one(id) {
        return fetch(`${BASE_URL}/products/${id}`, {
            credentials: "include"
        }).then(res => res.json());
    },
    create(params) {
        return fetch(`${BASE_URL}/products`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    update(id, params) {
        return fetch(`${BASE_URL}/products/${id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    delete(id) {
        return fetch(`${BASE_URL}/products/${id}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }
};

function refreshProducts() {
    Product.all().then(products => {
        const productsContainer = document.querySelector("ul.product-list");
        productsContainer.innerHTML = products
            .map(q => {
                return `
                <li>
                    <a class="product-link" data-id="${q.id}" href="">
                        <span>${q.id} - </span>
                        ${q.title}
                    </a>
                </li>
            `;
            })
            .join("");
    });
}
function setupForm(id) {
    Product.one(id).then(product => {
        document.querySelector("#edit-product-form [name=title]").value = product.title;
        document.querySelector("#edit-product-form [name=description]").value = product.description;
        document.querySelector("#edit-product-form [name=price]").value = product.price;
        document.querySelector("#edit-product-form [name=id]").value = product.id;
    });
}
function navigateTo(sectionId) {
    if (sectionId === "product-index") {
        refreshProducts();
    }
    document.querySelectorAll(".page").forEach(node => {
        node.classList.remove("active");
    });
    document.querySelector(`.page#${sectionId}`).classList.add("active");
    document.querySelectorAll(".navbar a").forEach(link => {
        link.classList.remove("active");
    });
    document.querySelector(`.navbar [data-target=${sectionId}]`).classList.add("active");

}

function getAndDisplayProduct(id) {
    Product.one(id).then(product => {
        const productDetailsContainer = document.querySelector("#product-show");
        const htmlString = `
            <h1>${product.title}</h1>
            <p>${product.description}</p>
            <small>Price: ${product.price}</small>
            <a class="link" data-target="product-edit" data-id="${product.id}" href="">Edit</a>
            |
            <a class="link" data-target="product-delete" data-id="${product.id}" href="">Delete</a>
            <h3>Reviews</h3>
            <ul>
                ${product.reviews.map(a => '<li>' + a.body + '</li>').join("")}
            </ul>
        `;
        productDetailsContainer.innerHTML = htmlString;
        navigateTo("product-show",);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    refreshProducts();

    document.querySelector(".navbar").addEventListener("click", event => {
        const link = event.target.closest("[data-target]");
        if (link) {
            event.preventDefault();
            const targetPage = link.getAttribute("data-target");
            navigateTo(targetPage);
        }
    });

    document.querySelector("ul.product-list").addEventListener("click", event => {
        const productLink = event.target.closest("a.product-link");
        if (productLink) {
            event.preventDefault();
            const {
                id
            } = productLink.dataset;
            getAndDisplayProduct(id);
        }
    });
    const newProductForm = document.querySelector("#new-product-form");
    newProductForm.addEventListener("submit", event => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const newProduct = {
            title: formData.get("title"),
            price: formData.get("price"),
            description: formData.get("description")
        };
        Product.create(newProduct).then(product => {
            newProductForm.reset();
            getAndDisplayProduct(product.id);
        });
    });
    document.querySelector("#product-show").addEventListener("click", event => {
        const link = event.target.closest("[data-target]");
        if (link) {
            const targetPage = link.getAttribute("data-target");
            const id = link.getAttribute("data-id");
            event.preventDefault();
            if (targetPage.indexOf('delete') > -1) {
                Product.delete(id).then(res => {
                    navigateTo("product-index");
                });
            } else {
                setupForm(id);
                navigateTo(targetPage);
            }
        }
    });

    const editProductForm = document.querySelector("#edit-product-form");
    editProductForm.addEventListener("submit", event => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const updatedProduct = {
            title: formData.get("title"),
            description: formData.get("description"),
            price: formData.get("price")
        };
        Product.update(formData.get("id"), updatedProduct).then(product => {
            editProductForm.reset();
            getAndDisplayProduct(product.id);
        });
    });
});