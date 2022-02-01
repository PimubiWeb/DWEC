<template>
    <div class="todo-item">
        <div class="todo-item-left">
                <input type="checkbox" @click="changedStatus(index,status)" >
                <div class="todo-item-label" >
                   <div>{{title}}</div>
                   <div>{{description}}</div>
                   <div>{{date}}</div>
                </div>
        </div>

        <div>
            <button @click="changedPriority(index, 0)">High</button>
            <button @click="changedPriority(index, 1)">Medium</button>
            <button @click="changedPriority(index, 2)">Low</button>
        </div>
        <div class="remove-item" @click="removedTodo(todo.id)">
            🗑️
        </div>
    </div>
</template>

<script>


export default ({
    name: 'todoItem',
    props: {
        todo:{
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            'id':this.todo.id,
            'title':this.todo.title,
            'description':this.todo.description,
            'date':this.todo.date,
            'status':this.todo.status,
            'priority':this.todo.priority
        }
    },
    methods: {
        removedTodo(id) {
            this.$emit('removedTodo', id)
        },
        changedStatus(index){
            this.$emit('changedStatus', index)
        },
        changedPriority(i, p){
            this.$emit('changedPriority',{
                'index': i,
                'prio': p
            })
        }
    }
    
})
</script>

<style>

</style>