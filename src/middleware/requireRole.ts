

import {NextFunction , Request ,Response} from 'express'



function requireRole(role : 'user' | 'admin'){

    return(req :Request , res: Response , next: NextFunction)=>{
        const authReq  = req as any
        const authUser = authReq.user ;

        if(!authUser){
        return res.status(401).json({message: "You are not auth user! you can enter the bulding "})
    }

     if(authUser.role !== role){
        return res.status(403).json({message: "You are not have correct role to access the route "})
    }
    next()
}
}

export default requireRole