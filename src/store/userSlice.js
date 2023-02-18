import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: { ans: [], ques: 0, checkedchoice: [], value: {} },
}
export const userSlice = createSlice({
    name: 'userStore',
    initialState: initialState,
    reducers: {
        countIndex: (state, actions) => {
            var count = []
            for (let i = 0; i < actions.payload; i++) {
                count.push(false)
            }
            state.value.checkedchoice = count
        },
        removeIndex: (state) => {
            state.value.checkedchoice = []
        },
        selectChoice: (state, actions) => {
            state.value.checkedchoice.fill(false)
            state.value.checkedchoice[actions.payload] = true
        },
        setValue: (state, actions) => {
            state.value.value = actions.payload
        },
        setAns: (state, actions) => {
            state.value.ans.push(state.value.value)
        }
    }
})
export const { countIndex, removeIndex, selectChoice, setValue, setAns } = userSlice.actions
export default userSlice.reducer