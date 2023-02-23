const Feedback = () => {
    return `
    
    <div class="max-w-6xl m-auto p-4 text">
        <div class="text-center">
            <h1>Do you have any quesions?</h1>
            <p>If you have any questions, please feedback me!</p>
        </div>
        <form action="">
            <div class="py-4 flex grid grid-cols-2 gap-8">
                <div><label>Name: </label> <input type="text" class="w-full border p-1"></div>
                <div><label>Gmail: </label> <input type="email" class="w-full border p-1"></div>
            </div>
            <label for="">Quesions:</label>
            <textarea name="" id="" cols="30" rows="10" class="w-full border p-2"></textarea>
        </form>
        <div class="text-center"><input type="submit" value="Submit" class="border py-2 px-6 m-4 bg-[#5ec576] text-white"></div>
    </div>
    
    `;
};

export default Feedback;
