const plainPayLoadMaker = (user) => {
    let payload = {
        name: user.name,
        email: user.email,
        id: user._id,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    }
    return payload;
}

export default plainPayLoadMaker;