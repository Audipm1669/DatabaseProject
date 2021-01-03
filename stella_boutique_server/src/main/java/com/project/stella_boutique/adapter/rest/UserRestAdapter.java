package com.project.stella_boutique.rest;

import com.project.stella_boutique.service.user.like.add.AddLikeUseCase;
import com.project.stella_boutique.service.user.like.add.AddLikeUseCaseInput;
import com.project.stella_boutique.service.user.like.add.AddLikeUseCaseOutput;
import com.project.stella_boutique.service.user.like.get.GetLikeUseCase;
import com.project.stella_boutique.service.user.like.get.GetLikeUseCaseInput;
import com.project.stella_boutique.service.user.like.get.GetLikeUseCaseOutput;
import com.project.stella_boutique.service.user.like.remove.RemoveLikeUseCase;
import com.project.stella_boutique.service.user.like.remove.RemoveLikeUseCaseInput;
import com.project.stella_boutique.service.user.like.remove.RemoveLikeUseCaseOutput;
import com.project.stella_boutique.service.user.order.add.AddOrderUseCase;
import com.project.stella_boutique.service.user.order.add.AddOrderUseCaseInput;
import com.project.stella_boutique.service.user.order.add.AddOrderUseCaseOutput;
import com.project.stella_boutique.service.user.order.cancel.CancelOrderUseCase;
import com.project.stella_boutique.service.user.order.cancel.CancelOrderUseCaseInput;
import com.project.stella_boutique.service.user.order.cancel.CancelOrderUseCaseOutput;
import com.project.stella_boutique.service.user.order.history.HistoryOrderUseCase;
import com.project.stella_boutique.service.user.order.history.HistoryOrderUseCaseInput;
import com.project.stella_boutique.service.user.order.history.HistoryOrderUseCaseOutput;
import com.project.stella_boutique.service.user.order.item.add.AddIntoOrderUseCase;
import com.project.stella_boutique.service.user.order.item.add.AddIntoOrderUseCaseInput;
import com.project.stella_boutique.service.user.order.item.add.AddIntoOrderUseCaseOutput;
import com.project.stella_boutique.service.user.order.item.remove.RemoveFromOrderUseCase;
import com.project.stella_boutique.service.user.order.item.remove.RemoveFromOrderUseCaseInput;
import com.project.stella_boutique.service.user.order.item.remove.RemoveFromOrderUseCaseOutput;
import com.project.stella_boutique.service.user.order.item.update.UpdateOrderUseCase;
import com.project.stella_boutique.service.user.order.item.update.UpdateOrderUseCaseInput;
import com.project.stella_boutique.service.user.order.item.update.UpdateOrderUseCaseOutput;

import com.project.stella_boutique.service.exception.AddLikeErrorException;
import com.project.stella_boutique.service.exception.GetLikeErrorException;
import com.project.stella_boutique.service.exception.RemoveLikeErrorException;
import com.project.stella_boutique.service.exception.AddOrderErrorException;
import com.project.stella_boutique.service.exception.CancelOrderErrorException;
import com.project.stella_boutique.service.exception.HistoryOrderErrorException;
import com.project.stella_boutique.service.exception.AddIntoOrderErrorException;
import com.project.stella_boutique.service.exception.RemoveFromOrderErrorException;
import com.project.stella_boutique.service.exception.UpdateOrderErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserRestAdapter {
    @Autowired
    AddLikeUseCase addLikeUseCase;

    @Autowired
    GetLikeUseCase getLikeUseCase;

    @Autowired
    RemoveLikeUseCase removeLikeUseCase;

    @Autowired
    AddOrderUseCase addOrderUseCase;

    @Autowired
    CancelOrderUseCase cancelOrderUseCase;

    @Autowired
    HistoryOrderUseCase historyOrderUseCase;

    @Autowired
    AddIntoOrderUseCase addIntoOrderUseCase;

    @Autowired
    RemoveFromOrderUseCase removeFromOrderUseCase;

    @Autowired
    UpdateOrderUseCase updateOrderUseCase;

    //--------------------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------- User Like --------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------------------------------

    @PostMapping(value = "/add/like")
    public ResponseEntity<AddLikeUseCaseOutput> AddLike(@RequestBody AddLikeUseCaseInput requestBody) {
        AddLikeUseCaseInput input = new AddLikeUseCaseInput();
        AddLikeUseCaseOutput output = new AddLikeUseCaseOutput();
        //----
        try {
            this.addLikeUseCase.execute(input, output);
        } catch (AddLikeErrorException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(output);
        }
        return ResponseEntity.status(HttpStatus.OK).body(output);
    }
    @PostMapping(value = "/get/like")
    public ResponseEntity<GetLikeUseCaseOutput> GetLike(@RequestBody GetLikeUseCaseInput requestBody) {
        GetLikeUseCaseInput input = new GetLikeUseCaseInput();
        GetLikeUseCaseOutput output = new GetLikeUseCaseOutput();
        //----
        try {
            this.getLikeUseCase.execute(input, output);
        } catch (GetLikeErrorException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(output);
        }
        return ResponseEntity.status(HttpStatus.OK).body(output);
    }
    @PostMapping(value = "/remove/like")
    public ResponseEntity<RemoveLikeUseCaseOutput> RemoveLike(@RequestBody RemoveLikeUseCaseInput requestBody) {
        RemoveLikeUseCaseInput input = new RemoveLikeUseCaseInput();
        RemoveLikeUseCaseOutput output = new RemoveLikeUseCaseOutput();
        //----
        try {
            this.removeLikeUseCase.execute(input, output);
        } catch (RemoveLikeErrorException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(output);
        }
        return ResponseEntity.status(HttpStatus.OK).body(output);
    }
}