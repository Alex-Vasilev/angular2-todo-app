import {Component, Input} from '@angular/core';

export class Item {
    purchase: string;
    done: boolean;
    hide: boolean;

    constructor(purchase: string) {
        this.purchase = purchase;
        this.done = false;
        this.hide = false;
    }
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/app-component/AppComponent.html'
})

export class AppComponent {
    @Input() addTextItem: string;
    editMode = false;
    olldItemTxt = '';
    items: Item[] =
    [
        {purchase: "Learn JavaScript", done: false, hide: false},
        {purchase: "Learn Angular", done: false, hide: false},
        {purchase: "To have a beer", done: true, hide: false},
        {purchase: "Walking with a dog", done: false, hide: false}
    ];

    addItem(text: string): void {
        console.log(2)
        console.log(text)
        if (text == null || text == undefined || text.trim() == "")
            return;
        this.items.push(new Item(text));
    }

    deleteTodo(index: number) {
        this.items.splice(index, 1);
        console.log(this.addTextItem)
    }

    deleteSelectedTodos() {
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (this.items[i].done) {
                this.items.splice(i, 1);
            }
        }
    }

    countPluralize() {
        var counter = 0;
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (!this.items[i].done) {
                counter++;
            }
        }
        return counter;
    }

    showAllTodos() {
        for (var i = (this.items.length - 1); i > -1; i--) {
            this.items[i].hide = false;
        }
    }

    showActiveTodos() {
        this.showAllTodos();
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (this.items[i].done) {
                this.items[i].hide = true;
            }
        }
    }

    showCompletedTodos() {
        this.showAllTodos();
        for (var i = (this.items.length - 1); i > -1; i--) {
            if (!this.items[i].done) {
                this.items[i].hide = true;
            }
        }
    }

    allDone() {
        for (var i = (this.items.length - 1); i > -1; i--) {
            this.items[i].done = true;
        }
    }

    enterEditMode(element: HTMLInputElement) {
        console.log('lox')
        this.editMode = true;
        if (this.editMode) {
            setTimeout(() => {
                element.focus();
                this.olldItemTxt = element.value
            }, 0);
        }
    }

    cancelEdit(element: HTMLInputElement) {
        this.editMode = false;
        element.value = this.olldItemTxt;
    }

    commitEdit(updatedText: string) {
        this.editMode = false;

    }
}